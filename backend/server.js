import dotenv from 'dotenv';
dotenv.config();

import app from './App.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
})
    .then(() => {
        console.log('✅ Database connected successfully');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('❌ Database connection error:', error);
        process.exit(1); // Stop the server if database fails
    });
