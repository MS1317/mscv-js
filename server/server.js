import express from 'express';
import cors from 'cors';
import pool from '../db.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

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

// Email Sending Route
app.post("/api/send-email", async(req,res)=>{
  const{name,email,message} = req.body;

  if(!name || !email || !message){
    return res.status(400).json({ success:false, message: "All fields are required."});
  }

  try{
    console.log("ENV CHECK:", process.env.EMAIL_USER, process.env.EMAIL_PASS);
        
    const transporter =nodemailer.createTransport({
      host:"smtp.hostinger.com",
      port:465,
      secure:true,
      auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
      }

    });

    const mailOptions={
      from:process.env.EMAIL_USER,
      to:process.env.EMAIL_USER,
      replyTo:email,
      subject:`Portfolio Contact: ${name}`,
      html:`
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    };
    await transporter.sendMail(mailOptions);
    res.json({success:true, message:"Email sent"})
  } catch(error){
    console.error('Error sending email:', error);
    res.status(500).json({success:false, message:"Failed to send email", error: error.message})
  }
});

  


const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
