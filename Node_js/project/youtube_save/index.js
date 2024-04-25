const http = require('http');
const fs = require('fs');
const url = require('url');
const https = require('https');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const videoUrl = decodeURIComponent(body.split('=')[1]); // Extracting the video URL from the POST body
            console.log('Received video URL:', videoUrl);

            // Parse the video URL
            const parsedUrl = new URL(videoUrl);
            const fileName = `${parsedUrl.hostname}_${Date.now()}.mp4`; // Creating a unique filename

            // Send response to client
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Video will be saved as ${fileName}`);

            // Create a writable stream to save the video
            const fileStream = fs.createWriteStream(fileName);

            // Make a GET request to the video URL and pipe the response to the file stream
            const request = https.get(videoUrl, (response) => {
                response.pipe(fileStream);
            });

            // Handle errors
            request.on('error', (err) => {
                console.error('Error downloading video:', err);
            });
        });
    } else {
        // Return error for unsupported HTTP methods
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }
});

// Start the server listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
