const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend.js'))
})

app.get('/testroute', (req, res) => {
    res.send({'Success': true})
})


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))