import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes); // ✅ API Routes

// Default Route for Home (Prevents 404)
app.get('/', (req, res) => {
    res.send('Welcome to the APDS Payments API');
});

export default app;
