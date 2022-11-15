const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// middleWare
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Doctors Portal is Running......");
});

app.listen(port, () => {
  console.log("Doctors portal Running On:", port);
});
