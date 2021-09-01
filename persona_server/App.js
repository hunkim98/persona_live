const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
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
const index_directory = "../persona_client/build"; //choose between "pasted" and "../persona_client/build"

const personaSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    personality: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "collection" }
);

const updatedSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    personality: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "collection" } //adds data to the same collection but saved with objectId
);

const readSchema = new mongoose.Schema(
  {
    name: String,
    personality: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "collection" } //adds data to the same collection but saved with objectId
);

const personaData = mongoose.model("persona", personaSchema);
const updatedData = mongoose.model("persona_updated", updatedSchema);
const readData = mongoose.model("persona_read", readSchema);

app.use(express.json({ limit: "1mb" }));

app.use(express.static(path.join(__dirname, index_directory)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, index_directory, "index.html"));
});

app.post("/infographic_data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  infographic_data = [];
  let counter = 0;
  async function data_check(i) {
    readData.find({ personality: i }).countDocuments(function (err, count) {
      infographic_data[i - 1] = count;
      console.log("Number of " + i + " docs: " + count);
      counter = counter + 1;
      if (counter === 9) {
        //added all data
        console.log("yes!");
        console.log(infographic_data);
        res.json(infographic_data);
      }
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
  readData.find({}, (err, docs) => {
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
  req.body._id = new mongoose.Types.ObjectId();
  const persona_add = new updatedData(req.body);
  persona_add.save().catch((err) => {
    console.log("Error : " + err);
  });
  res.json({
    status: "success",
    id: req.body._id,
    name: req.body.name,
  });
});

// _id: req.body.user_id
app.post("/count_total", (req, res) => {
  readData.find({}).countDocuments(function (err, count) {
    res.json(count);
  });
});

app.post("/shareData", (req, res) => {
  console.log("user requests data");
  console.log(req.body.user_id);
  personaData.findOne({ _id: req.body.user_id }, (err, docs) => {
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
      //search for ObjectId
      updatedData.findOne({ _id: req.body.user_id }, (err, other) => {
        if (err) {
          response.end();
          return;
        }
        if (other !== null) {
          res.json({
            status: "success",
            name: other.name,
            personality: other.personality,
            choice: other.choice,
          });
        } else {
          res.json({
            status: "false",
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
