const path = require("path")
const express = require("express")

const app = express()

// app.get("/", (req, res) => {
//     res.send("Olá mundo!!!")
// })

// o servidor estático para a rota "/"
app.use(express.static("static"))

// o servidor estático para a rota "/images"
// app.use("/images", express.static("images"))  -- Relativo ao local onde foi executado o servidor (comando do node)

app.use("/images", express.static(path.join(__dirname, "images")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "404.html"))
// })

app.get("*", (req, res) => {
    if (req.accepts("html")) {
        res.status(404).sendFile(path.join(__dirname, "404.html"))
    }

})

app.listen(3001)
