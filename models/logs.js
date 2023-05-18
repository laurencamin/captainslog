const { Schema, model } = require("mongoose")

// creating a new Schema, same thing as mongoose.Schema
const logsSchema = new Schema ({
  Title: { type: String, required: true},
  Entry: { type: String, required: true},
  shipIsBroken: Boolean
})

// creating a new model, same thing as mongoose.model
const Logs = model("Logs", logsSchema);

module.exports = Logs
