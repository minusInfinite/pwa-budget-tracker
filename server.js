const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const compression = require("compression")
require("dotenv").config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger("dev"))

app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))
// routes
app.use(require("./routes/api.js"))

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => console.error(err))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
