const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))