const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  console.log('🌐 GET request received');
  res.send('Hello from GET!');
});

app.post('/', (req, res) => {
  console.log('🔥 POST request received');
  res.send('Hello from POST!');
});
app.put('/', (req, res) => {
  console.log('🔥 PuT request received');
  res.send('Hello from PuT!');
});

app.get("/indexx", (req, res) => {
  console.log('index html request');
  res.sendFile('template/indexx.html', { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 })
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
