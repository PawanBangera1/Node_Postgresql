import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    USERNAME: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
});

pool.on('connect', () => {
    console.log('Connected to the database');
});


export default pool;