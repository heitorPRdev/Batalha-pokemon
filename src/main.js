const express = require('express')
const app = express()
const port = 5000
app.use(express.static(__dirname+'/public'))

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
app.get('/vencedor/',(req,res) =>{
    res.sendFile(__dirname+'/public/html/vendor_v.html')
})
app.get('/Vencerdor_rattata/',(req,res) =>{
    res.sendFile(__dirname+'/public/html/vencedor_ratta.html')
})
app.listen(port)
//Fazer as miniaturas e colocar no html da batalha