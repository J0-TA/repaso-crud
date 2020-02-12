const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaName = new Schema({
    name: String,
    description: String,
    inversions: Number, 
    length: Number,
    active: Boolean,
    park: { type : Schema.Types.ObjectId, ref: 'Park' },
}
)
const Model = mongoose.model("Coaster", schemaName);
module.exports = Model;