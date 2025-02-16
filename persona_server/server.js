const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));

const index_directory = "pasted";

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
  { collection: "collection" }
);

const readSchema = new mongoose.Schema(
  {
    name: String,
    personality: Number,
    choice: Array,
    timestamp: Date,
  },
  { collection: "collection" }
);

const personaData = mongoose.model("persona", personaSchema);
const updatedData = mongoose.model("persona_updated", updatedSchema);
const readData = mongoose.model("persona_read", readSchema);

app.use(express.json({ limit: "1mb" }));

app.use(express.static(path.join(__dirname, index_directory)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, index_directory, "index.html"));
});

app.post("/infographic_data", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let infographic_data = [];
  let counter = 0;

  async function data_check(i) {
    const count = await readData.countDocuments({ personality: i }).exec();
    infographic_data[i - 1] = count;
    console.log(`Number of ${i} docs: ${count}`);
    counter++;
    if (counter === 9) {
      console.log("yes!", infographic_data);
      res.json(infographic_data);
    }
  }

  async function data_sequential() {
    for (let i = 1; i < 10; i++) {
      await data_check(i);
    }
  }

  data_sequential();
});

app.post("/gatherData", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const docs = await readData.find({});
    console.log("sending whole Data");
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/test", (req, res) => {
  res.send("working");
});

app.get("/backupData", (req, res) => {
  let ipAddress = req.headers["x-forwarded-for"];
  res.header("Access-Control-Allow-Origin", "*");
  res.send(
    ipAddress === "49.173.2.19" ? "You are the host!" : "You are not the host!"
  );
});

app.post("/sendData", async (req, res) => {
  console.log("user sent data", req.body);
  req.body.timestamp = Date.now();
  req.body._id = new mongoose.Types.ObjectId();

  try {
    const persona_add = new updatedData(req.body);
    await persona_add.save();
    res.json({ status: "success", id: req.body._id, name: req.body.name });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.post("/count_total", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const count = await readData.countDocuments();
    res.json(count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to count documents" });
  }
});

app.post("/shareData", async (req, res) => {
  console.log("user requests data", req.body.user_id);
  try {
    let data = await personaData.findOne({ _id: req.body.user_id }).exec();
    if (!data) {
      data = await updatedData.findOne({ _id: req.body.user_id }).exec();
    }
    if (data) {
      res.json({
        status: "success",
        name: data.name,
        personality: data.personality,
        choice: data.choice,
      });
    } else {
      res.json({ status: "false" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = app; // 🔥 Export the app instead of running `app.listen()`
