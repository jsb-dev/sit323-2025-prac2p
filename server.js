// imports
import express from 'express';

// Define app and port number
const app = express();
const PORT = 3000;

// Serve static HTML from the "public" directory
app.use(express.static('public'));

// Log for production
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/*
  This server runs on the localhost port 3000
  As soon as the server receives a request, the public HTML content is served

  To test that the server is working, run "npm start" from the project root and visit
  http://localhost:3000 in your web browser.
*/
