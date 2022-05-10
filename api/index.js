const express = require('express')
const app = express()
const cors = require('cors')
const connectToMongo = require('./db')

const professorRoute = require('./routes/professor')
const studentRoute = require('./routes/student')
const parentRoute = require('./routes/parent')
const adminRoute = require('./routes/admin')
const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')

app.use(express.json())
app.use(cors())

// ----------All Routes-----------
app.use('/api/professor', professorRoute)
app.use('/api/student', studentRoute)
app.use('/api/parent', parentRoute)
app.use('/api/admin', adminRoute)
app.use('/api/conversation', conversationRoute)
app.use('/api/message', messageRoute)


app.listen(8080, () => {
    console.log('Backend server is running successfully!!')
})