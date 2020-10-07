import express from 'express';

const PORT = process.env.PORT|| 4000;
const app = express();

// app.use(express.json());


// home
app.get("/", (req, res) => {
  res.send("Example site")
})

// status info
app.get("/status", function(req, res) {
  res.send("Running on port: " + PORT);
});

// port
app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
})
