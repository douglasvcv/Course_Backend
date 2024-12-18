import express from 'express';

const app = express()

app.listen(8080, ()=>{
    console.log("Server running in http://localhot:8080")
})