const express = require('express')
const app = express()
const port = 5000
app.use(express.static(__dirname+'/src'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/html/index.html')
})
app.get('/Luta-Shar-Rattata/',(req,res)=>{
    res.sendFile(__dirname+'/public/html/sharmanderVsrattata.html')
})
app.get('/Luta-Bulb-Rattata/',(req,res)=>{
    res.sendFile(__dirname+'/public/html/bulbasaurVsrattata.html')
})
app.get('/Luta-Squi-Rattata/',(req,res)=>{
    res.sendFile(__dirname+'/public/html/squirtleVsrattata.html')
})
app.listen(port)
//Fazer as miniaturas e colocar no html da batalha