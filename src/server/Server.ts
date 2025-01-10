import express, { json } from 'express';
import { route } from '../routes/route';

const app = express()


app.use(json())
app.use(route)

export {app}