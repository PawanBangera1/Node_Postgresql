import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import router from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', router);

app.use(errorHandler);

createUserTable();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});