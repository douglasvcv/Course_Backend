import { app } from "./server/Server.ts"



app.listen(3333, () => {
    console.log("Server running: http://localhost:3333")
})
