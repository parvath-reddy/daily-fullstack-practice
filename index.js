const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")
app.get('/', (req, res) => {
    let siteName = "adidas"
    let serchText ="search now"
    let arr = ["hay",54,65]
  res.render("index",{siteName:siteName ,searchText:serchText,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "adidas why and when"
    let blogContent ="its a very good brand"
    
  res.render("blogpost.html",{blogTitle :blogTitle , blogContent: blogContent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
