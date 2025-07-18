const express = require('express')
const app = express()
 const mongoose = require('mongoose')
const Employee = require('./models/employee.js')
mongoose.connect('mongodb://127.0.0.1:27017/company')
const port = 3000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index', { foo: "FOO" });
})

app.get('/genrate', async(req, res) => {
    //generate random data 
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: "ankoor",
            salary: 45000,
            city: " sehore ",
            isManager: true
        })
        // await e.save()
    }
    res.render('index', { foo: "FOO" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
