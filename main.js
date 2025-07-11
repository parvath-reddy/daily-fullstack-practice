const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))


app.use('/blog', blog)


//middleware1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers);
    req.ankoor = "im ankoor";
    const time = new Date().toLocaleString();
    fs.appendFileSync("logs.txt", `${time} is a ${req.method}\n`);
    console.log(`${time} is a ${req.method}`);
    next();
});


//middleware2
app.use((req, res, next) => {
    console.log('m2');
    req.harry ="im ankoor bhai ";
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about! ' + req.ankoor)
})
app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
