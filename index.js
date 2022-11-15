const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleWare
app.use(cors());
app.use(express.json());

const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = () => {
  try {
    const appointmentOptionsCollection = client
      .db("doctorsPortal")
      .collection("appointmentOptions");

    app.get("/appointmentOptions", async (req, res) => {
      const query = {};
      const options = await appointmentOptionsCollection.find(query).toArray();
      res.send(options);
    });
  } catch {}
};
run();

app.get("/", async (req, res) => {
  res.send("Doctors Portal is Running......");
});

app.listen(port, () => {
  console.log("Doctors portal is Running On:", port);
});
