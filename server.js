var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000;

const examp = { imie: "Dominik", nazwisko: "Małek", klasa: "3i1", grupa: "2" }

app.get("/", function (req, res) {
    res.send("<h1>Małek Domink 3i1 Gr2</h1>")
})

app.get("/data", function (req, res) {
    res.send(examp)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})