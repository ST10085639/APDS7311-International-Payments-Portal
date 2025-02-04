import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    currency: { type: String, required: true },
    swiftCode: { type: String, required: true },
    accountNumber: { type: String, required: true }, // Ensure this field is required
    idNumber: { type: String, required: true } // Ensure this field is required
});

export default mongoose.model('User', userSchema);
