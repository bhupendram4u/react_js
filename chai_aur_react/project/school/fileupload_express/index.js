
const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const cors = require('cors');

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage to handle file chunks
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const { chunkNumber } = req.headers;
    const fileName = `${file.originalname}.part${chunkNumber}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });


const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));



app.post('/upload', upload.single('file'), (req, res) => {
  const { file } = req;
  const { chunkNumber, totalChunks, fileName } = req.headers;
  console.log(`Request Header -  ${chunkNumber}, ${totalChunks}, ${fileName} `)
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  console.log(`Rewquest received for file ${file.filename}`)
  
  const currentChunkPath = path.join(uploadDir, file.filename);
  const finalFilePath = path.join(uploadDir, fileName);

  // Combine chunks if it's the last one
  if (parseInt(chunkNumber) === parseInt(totalChunks)) {
    const writeStream = fs.createWriteStream(finalFilePath);

    for (let i = 1; i <= totalChunks; i++) {
      const chunkPath = path.join(uploadDir, `${fileName}.part${i}`);
      if (fs.existsSync(chunkPath)) {
        const data = fs.readFileSync(chunkPath);
        writeStream.write(data);
        fs.unlinkSync(chunkPath); // Remove chunk after appending to final file
      }
    }
    writeStream.end();
    res.status(200).send('File uploaded and combined successfully');
  } else {
    res.status(200).send(`Chunk ${chunkNumber} uploaded successfully`);
  }
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(3001, () => {
  console.log('Server running on port 3001');
});