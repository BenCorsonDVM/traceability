const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ede99e54fcf34cb2a0947a56e2c89371',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend.js'))
})

app.get('/testroute', (req, res) => {
    res.send({'Success': true})
})

app.get('/press-me-button', (req, res) => {
    res.send('Autosave is OP')
    rollbar.info('Someone pressed the button')
})





const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))