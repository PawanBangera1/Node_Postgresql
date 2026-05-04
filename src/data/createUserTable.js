import pool from '../config/db.js';

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;
    try {
        pool.query(query);
        console.log('User table created successfully');
    } catch (err) {
        console.error('Error creating user table:', err);
    }
};

export default createUserTable;