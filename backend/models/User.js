import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    password: { type: String, required: true },
    idNumber: { type: String, required: true, unique: true },
    accountNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model('User', userSchema);