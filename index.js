const express = require('express')
const app=express() 

app.arguments(express.json)


let poruke = [
    {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    },
    {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    },
    {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    }
]
   
app.post('/api/poruke', (req, res) => {
    const poruka=req.body
    console.log(poruka)
    res.json(poruka)
})

app.get('/api/poruke/:id', (req, res) =>{
    const id=Number(req.params.id)
    const poruka = poruke.find(p=>p.id===id)
    res.json(poruka)

    if(poruka){
        res.json(poruka)
    }
    else{
        res.status(404).end()
    }
})

app.delete('/api/poruke/:id',(req,res)=>{
    const id= Number(req.params.id)
    poruke=poruke.filter(p=>p.id!==id)
    res.status(204).end()
})

app.get('/',(req,res) =>{
    res.send('<h1>Pozdrav od Express servera</h1>')
})

app.get('/api/poruke', (req, res) =>{
    res.json(poruke)
})
const PORT = 3001
app.listen(PORT, () =>{
    console.log(`Poslužitelj je pokrenut na portu ${PORT}`);

})

