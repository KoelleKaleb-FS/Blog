// data/posts/post3.js
const post3 = {
    id: 'third-post',
    title: "Exploring Node.js Streams",
    date: "2024-07-15",
    author: "Kaleb Koelle",
    content: `
      ## What Are Node.js Streams?
      Node.js streams are a powerful feature that allows for efficient data handling. They enable reading and writing of data in chunks, rather than loading entire datasets into memory.
  
      ## Types of Streams
      - **Readable Streams**: Streams from which data can be read.
      - **Writable Streams**: Streams to which data can be written.
      - **Duplex Streams**: Streams that are both readable and writable.
      - **Transform Streams**: Streams that modify or transform data as it is read or written.
  
      ## Use Cases
      - **File Operations**: Efficiently read and write large files.
      - **HTTP Requests**: Stream data to and from HTTP endpoints.
  
      ## Example
      Reading a file using a readable stream:
  
      \`\`\`js
      const fs = require('fs');
      const readStream = fs.createReadStream('largefile.txt');
  
      readStream.on('data', chunk => {
        console.log('Received a chunk:', chunk);
      });
  
      readStream.on('end', () => {
        console.log('File reading completed.');
      });
      \`\`\`
  
      ## Conclusion
      Node.js streams provide a flexible way to handle large volumes of data efficiently and should be considered for various I/O operations.
    `,
    tags: ["Node.js", "Programming"]
  };
  
  export default post3;
  