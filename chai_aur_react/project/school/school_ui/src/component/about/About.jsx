import React, { useState } from 'react';
import axios from 'axios';

function About() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const CHUNK_SIZE = 1024 * 1024; // 1MB chunk size

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    let uploadedChunks = 0;

    for (let start = 0; start < file.size; start += CHUNK_SIZE) {
      const chunk = file.slice(start, start + CHUNK_SIZE);
      const chunkNumber = start / CHUNK_SIZE + 1;

      const formData = new FormData();
      console.log(`Form Data =>${chunk}`)
      formData.append('file', chunk);

      try {
        await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'chunk-number': chunkNumber,
            'total-chunks': totalChunks,
            'fileName': file.name,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              ((uploadedChunks + progressEvent.loaded / progressEvent.total) / totalChunks) * 100
            );
            setUploadProgress(progress);
          },
        });
        uploadedChunks++;
      } catch (error) {
        console.error('Upload error, resuming upload...', error);
        start -= CHUNK_SIZE; // Retry the current chunk
      }
    }
  };
  
    return (
      <div>
        
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
        <div>Upload Progress: {uploadProgress}%</div>
      </div>
    );
 
  
  // return (
  //   <div className="container">
  //       About
  //   </div>
  // )
}

export default About
