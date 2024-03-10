import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

//middle wares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');//less hacker willl know 

const port = 8000;


//http get request
app.get('/username', (req, res) => {
    res.status(201).json("Home Get request")
})


//api routes
app.use('/api',router)



//start server when we have valid connection
connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })

    }catch(error){
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection")
})