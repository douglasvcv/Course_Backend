import express from 'express';

const app = express()


app.get('/teste', (req, res)=>{
    res.send('Olá dev')
})

export {app}