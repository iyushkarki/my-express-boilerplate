const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
});

module.exports = mongoose.model("Test", TestSchema);
