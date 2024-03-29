const express = require('express')
const router = express.Router()
const Conversation = require('../models/Conversation')

//  New Conversation
router.post('/', async (req, res) => {
    const newConversation = new Conversation(req.body)
        // members: [req.body.senderId, req.body.receiverId]
    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (error) {
        res.status(500).json(error)
    }
})

//  Get Conversation

router.get('/find/:userId', async(req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in : [req.params.userId]}
        })
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json(error)
    }
})

//  Get All Conversations 

router.get('/all', async (req, res) => {
    try {
        const allConversations = await Conversation.find()
        res.status(200).json(allConversations)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router