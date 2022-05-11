const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    conversationId : String,
    sender: String,
    text: String,
    date: Date
},
{timestamps: true}
)

 module.exports = mongoose.model('Message', messageSchema)