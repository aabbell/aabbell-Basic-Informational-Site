const express = require("express")
const path = require("path")

const app = express()

app.get("/" || "/index",(req,res) => res.sendFile(path.join(__dirname, 'index.html' )))
app.get("/about",(req,res) => res.sendFile(path.join(__dirname ,'about.html')))
app.get("/404", (req ,res) => res.sendFile(path.join(__dirname ,'404.html')))
app.get ("/contact-me", (req,res) => res.sendFile(path.join(__dirname, "contact-me.html")))

const PORT = 8080

app.listen(PORT, () => {
    console.log(`the express app port ${PORT}`)
})