import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './defaultdata.js';
import Router from './routes/route.js'
import colors from 'colors';


const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.USER;
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD);


app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`.bold.bgWhite);
})

DefaultData();