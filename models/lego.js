const mongoose = require('mongoose')
// Schema
const legoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    set: { type: String, required: true},
    comment: { type: String, required: true},
    username: String
})
// Model made from the schema
const Lego = mongoose.model('Lego', legoSchema)
// Export for the model
module.exports = Lego