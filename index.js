import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT|| 4000;
const app = express();


// home
app.get("/", (req, res) => {
  res.send("Example site 2");
})

// example text
app.get("/text", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/text.html"));
})

// example json
app.get("/json", (req, res) => {
  let rawdata = fs.readFileSync(__dirname + "/pages/example.json")
  let example_json = JSON.parse(rawdata)
  res.send(example_json);
})

// status info
app.get("/status", function(req, res) {
  res.send("Running on port: " + PORT);
});

// port
app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
})
