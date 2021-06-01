const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const Datastore = require("nedb");
var path = require("path");

const uri = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hunkim98:hunkim98@cluster0.xzyh7.mongodb.net/firstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));
const database = new Datastore("database.db");
const index_directory = "pasted_build"; //choose between "pasted_build" and "../persona_client/build"
database.loadDatabase();
app.use(express.json({ limit: "1mb" }));

app.use(express.static(path.join(__dirname, index_directory)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, index_directory, "index.html"));
});

app.post("/infographic_data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  infographic_data = [];
  async function data_check(i) {
    database.find({ personality: i }, (err, docs) => {
      infographic_data.push(docs.length);
      if (i === 9) {
        console.log(infographic_data);
        res.json(infographic_data);
      }
      return docs.length;
    });
  }
  async function data_sequential() {
    //node js is javascript non-blocking
    //you need to use await and async function for creating sequential functions
    for (i = 1; i < 10; i++) {
      const a = await data_check(i);
    }
  }
  data_sequential();
});

app.post("/gatherData", (req, res) => {
  database.find({}, (err, docs) => {
    console.log("sending whole Data");
    res.header("Access-Control-Allow-Origin", "*");
    res.json(docs);
  });
});

app.get("/test", (req, res) => {
  res.send("working");
});

app.get("/backupData", (req, res) => {
  let ipAddress = req.headers["x-forwarded-for"];
  res.header("Access-Control-Allow-Origin", "*");
  if (ipAddress == "49.173.2.19") {
    res.send("You are the host!");
  } else {
    res.send("You are not the host!");
  }
});

// app.get("/removeData", (req, res) => {
//   database.remove({}, { multi: true }, function (err, numRemoved) {
//     res.send("erased all data");
//   });
// });

app.post("/sendData", (req, res) => {
  console.log("user sent data");
  console.log(req.body);
  const timestamp = Date.now();
  req.body.timestamp = timestamp;
  database.insert(req.body);
  database.findOne(req.body, (err, docs) => {
    if (err) {
      response.end();
      return;
    }
    console.log({ id: docs._id });
    res.json({
      status: "success",
      id: docs._id,
      name: req.body.name,
    });
  });
});

app.post("/shareData", (req, res) => {
  console.log("user requests data");
  console.log(req.body.user_id);
  database.findOne({ _id: req.body.user_id }, (err, docs) => {
    if (err) {
      response.end();
      return;
    }
    if (docs !== null) {
      res.json({
        status: "success",
        name: docs.name,
        personality: docs.personality,
        choice: docs.choice,
      });
    } else {
      res.json({
        status: "false",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
