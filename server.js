const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://github.com/marcvv21"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("thru ran you.")
  })
}
module.exports = keepAlive