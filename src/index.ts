import { app } from "./server/Server.ts"

app.get('/', (req, res) => {
    res.send('Eu te mamo celeste')
})

app.listen(3333, () => {
    console.log("Server running")
})
