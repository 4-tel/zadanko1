var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("<h1>Małek Domink 3i1 Gr2</h1>")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})