const express = require('express')
const mongoose = require("mongoose")

const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())

app.use(cors())
app.use("/api/todo", require("./routes/todo.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "rossover not found" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "server error" })
})

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", (req, res) => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))

})
