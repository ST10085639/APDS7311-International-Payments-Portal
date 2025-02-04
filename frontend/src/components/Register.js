import React, { useState } from 'react';
import { registerUser } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', userFirstName: '', userLastName: '', currency: '', swiftCode: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFormData({ ...formData, userFirstName: e.target.value })} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setFormData({ ...formData, userLastName: e.target.value })} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Currency" onChange={(e) => setFormData({ ...formData, currency: e.target.value })} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="SWIFT Code" onChange={(e) => setFormData({ ...formData, swiftCode: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
};
export default Register;