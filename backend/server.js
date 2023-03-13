import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

connectDB();

app.use(express.json());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(
  PORT,
  console.log(
    `Server is running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
