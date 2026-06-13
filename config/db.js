
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (cb) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log('MongoDB connected');
        if (cb) cb();   
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;