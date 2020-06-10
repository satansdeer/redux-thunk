const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

let db = lowdb(new FileSync('db.json'));

db.defaults({ notes: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 4000

app.get("/notes", (req, res) => {
  const data = db.get("notes").value()
  return res.json(data)
})

app.post("/notes", (req, res) => {
  const notes = req.body
  db.set("notes", notes).write()
  res.json({ success: true })
})

app.listen(port, () =>
  console.log(
    `Backend running on http://localhost:${port}!`
  )
)
