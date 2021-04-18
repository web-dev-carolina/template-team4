const mongoose = require("mongoose");

const Event = mongoose.Schema({
  name: {
    type: String,
  },
  startYear: {
    type: Number,
  },
  startMonth: {
    type: Number,
  },
  startDay: {
    type: Number,
  },
  startHour: {
    type: Number,
  },
  startMin: {
    type: Number,
  },
  endYear: {
    type: Number,
  },
  endMonth: {
    type: Number,
  },
  endDay: {
    type: Number,
  },
  endHour: {
    type: Number,
  },
  endMin: {
    type: Number,
  },
  color: {
    type: Number,
  },
  description: {
    type: String,
  },
  vac: {
    type: String,
  }
});

module.exports = mongoose.model("Event", Event);
