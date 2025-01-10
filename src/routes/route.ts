import  express  from "express";
import { Request, Response } from "express";

const route = express()

route.get('/', (req: Request, res: Response)=>{
    res.send('Hello world!!!')
})
route.get('/teste', (req: Request, res: Response)=>{
    res.send(req.query.teste)
})

route.post('/bla', (req: Request, res: Response)=>{
    console.log(req.body.nome)
    res.send('Criarei')
})

export{route}