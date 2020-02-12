const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaName = new Schema({
    name: String,
    description: String,
    active: Boolean
  });

  const Model = mongoose.model("Park", schemaName);
  module.exports = Model;