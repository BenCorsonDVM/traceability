const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())




const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))