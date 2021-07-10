// server.js
// where your node app starts

// init project
require("dotenv").config()
var express = require("express")
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors")
app.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" })
})

app.get("/api/whoami", (req, res) => {
  // console.log(req.header('Accept-Language'), req.header('User-Agent'))
  const ipaddress = "127.0.0.1"
  const language = req.header("Accept-Language")
  const software = req.header("User-Agent")

  console.log(ipaddress, language, software)
  return res.json({
    ipaddress,
    language,
    software,
  })
})

// A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
// A request to /api/whoami should return a JSON object with your preferred language in the language key.
// A request to /api/whoami should return a JSON object with your software in the software key.
// Example Output:
// {"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
// "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"},

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// var listener = app.listen(process.env.PORT || 3000, function () {
//   console.log("Your app is listening on port " + listener.address().port)
// })
