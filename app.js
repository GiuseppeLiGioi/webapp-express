import express from "express"
import moviesRouter from "./routers/MoviesRouter.js"

const app = express();
const port = 3000;


app.use( "api/movies" , moviesRouter )

//attivazione del server
app.listen(port, () =>{
    console.log("Server in funzione sulla porta" + port)
})