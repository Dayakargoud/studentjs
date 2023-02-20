const express = require('express')
const studentsRoutes = require('./routes')

const app = express()
const port = 8003

app.get("/about",(req,res)=>{
    res.send("Hello Student server 1.0-alpha")
})
app.use(express.json());

app.use("/api/v1/students", studentsRoutes);

app.listen(port,()=>console.log(`listening on port ${port}`))