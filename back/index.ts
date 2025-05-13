import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './src/router';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:9000',
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(9000, ()=>{
    console.log("server running on http://localhost:9000/")
})

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER_URL = process.env.MONGO_CLUSTER_URL;
const MONGO_DATABASE = process.env.MONGO_DATABASE || ''; // استخدم قيمة افتراضية إذا لم يتم تعريفها

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER_URL}/${MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

mongoose.connection.once('open', () => {
  console.log('Successfully connected to MongoDB!');

});

app.use('/', router());