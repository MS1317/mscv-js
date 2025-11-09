import express from 'express';
import cors from 'cors';
import pool from './db.js';

// server.js
import dotenv from "dotenv";

// pick the env file based on NODE_ENV
const envFile =
  process.env.NODE_ENV === "development"
    ? ".env.local.dev"
    : ".env.local.prod";

dotenv.config({ path: envFile });

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Test database connection
app.get('/api/test-db', async (res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ success: true, message: 'Database connection successful', data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database connection failed', error: error.message });
  }
});

// Get all categories
app.get('/api/categories', async (req,  res) => {
  try{
    const {rows} = await pool.query('SELECT * FROM web_categories ORDER BY id');
    res.json(rows);
  }
  catch(error){
  console.error('Error fetching categories:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve categories', error: error.message });
  }
})

// Get all portfolio items
app.get('/api/portfolio', async (req, res) =>{
  try{
    const { rows} = await pool.query('SELECT * FROM portfolio ORDER BY id');
    res.json(rows);

  }catch(error){
    console.error('Error fetching portfolio items:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve portfolio items', error: error.message });
  }
}) 


const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
