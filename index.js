import express from "express";
import TravelRouter from "./routes/viajes.js";
import tRouter from "./routes/testimoniales.js";
import pagesRoute from "./routes/mainPages.js";
import db from './config/db.js';


const app = express();
const port = process.env.PORT || 4000;

// Database Connection.
db.authenticate()
    .then(() => console.log('Base de datos Conectada'))
    .catch( e => console.log(e))


// Using pug as template Engine
app.set('view engine', 'pug');


// Connect to static files.
app.use(express.static('public'))


// add body-parser
app.use(express.urlencoded({extended:true}))


// Middleware to set the actual year.
app.use((req, res, next) => {
    const date = new Date()
    res.locals.actualYear = date.getFullYear();
    res.locals.websiteName = "Agencia de Viajes";
    next();
})

// Travels and Testimonials Routes
app.use('/', pagesRoute)
app.use('/viajes', TravelRouter);
app.use("/testimoniales", tRouter)


app.listen(port, ()=> console.log(`Running on Port: http://localhost:${port}`));