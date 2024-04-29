const express = require('express')
const app = express()
const port = 3002

const bodyparser =  require('body-parser')

app.use(bodyparser.json())


app.post(`/data`,(req, res)=>{
    console.log({RequestFromOutsite:req.body})
    res.send(`login berhasil`)
})

app.listen(port, ()=>{
    console.log(`runing in port ${port}`)
})