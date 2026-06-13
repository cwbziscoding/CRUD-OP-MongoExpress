import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

import connectDB from './config/db.js';
connectDB(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
});

import userRoutes from './routes/user.routes.js';

// User Routes
app.use('/api/users', userRoutes);