import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
// Test database connection on server start
pool.connect()
    .then(() => console.log('Database connection successful!'))
    .catch(err => console.error('Database connection error:', err));
import router from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/users', router);

// error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});