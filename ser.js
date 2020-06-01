#!/usr/bin/env node

// Step 1 and step 2 code goes here

// Step 3 code goes here
      // // ¸üxpress`
   const express = require('express')
          //
          // // create an express, aka web server, instance
          // // «إߤ@­Óexpress (¤]´N¬Oº����ø)¹ê
           const app = express()
          
           const port = 36987
          //
          // // handle `/step1` url
          // // ³B²z `/step1` ºôap
        app.get('/step1', (req, res) => {
          //   // response browser
          //     // ¦^3ÂÄ¾¹
              res.send('<h1>hello world</h1>')
                 })
          //
          //       // start the server
          //       // ±Ұʦø
                app.listen(port, () => {
                   console.log(`listening on port: ${port}`)
                   })
app.use(express.static(`${__dirname}/dist`))
// Step 4 code goes here
let nRequests = 0
app.get('/step4', (req, res) => {
    res.send(`this is request #${++nRequests}`)
})
// Step 5 code goes here
app.get('/step5', (req, res) => {
    res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})
// Step 7 code goes here
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/step7', (req, res) => {
    // `bady-parser` stores parsed data in `req.body`
  //   // `bady-parser` 將解析好的資料存放在 `req.body`
    res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
       })
