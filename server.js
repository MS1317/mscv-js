import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/test-db', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT 1');
    connection.release();
    res.json({ success: true, message: 'Database connection successful', data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database connection failed', error: error.message });
  }
});

app.get('/api/service-cards', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM service_cards');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch service cards', error: error.message });
  }
});

app.get('/api/web-technologies', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM web_service');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch web technologies', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
