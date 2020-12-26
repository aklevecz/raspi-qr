const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 5000

io.on('connection', client => {
    console.log('a chicken is connected')
})

app.set('view engine', 'ejs')
app.use('/midway', express.static('/media/sandy/MIDWAY'))
app.use('/modules', express.static(path.join(__dirname, 'node_modules')))
app.use("/static", express.static(path.join(__dirname, "static")))

app.get('/', (req, res) => {
    const imgSrc = "static/qr-code.png"
    res.render("index", {imgSrc})
})

app.get("/frogman", (req,res) => {
    console.log("regs?")
    io.sockets.emit("peepee")
    res.send("frogs on thre g")
})

server.listen(port, () => {
    console.log(`im listening to ${port} binch`)
})