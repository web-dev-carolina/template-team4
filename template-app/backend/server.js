const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Event = require("./models/Event");

mongoose.connect("mongodb://127.0.0.1:27017/calendar", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 8088;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Event.find((err, events) => {
    if (err) {
      console.log(err);
    } else {
      res.json(events);
    }
  });
});

app.post("/create", (req, res) => {
  const event = new Event(req.body);
  event
    .save()
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Event.findById(id, (err, event) => {
    res.json(event);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Event.findById(id, (err, event) => {
    if (!event) {
      res.status(404).send("Event not found");
    } else {
        event.text = req.body.text;

        event
        .save()
        .then((event) => {
          res.json(event);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
