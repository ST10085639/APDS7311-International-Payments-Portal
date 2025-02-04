import React, { useState } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', userFirstName: '', userLastName: '', currency: '', swiftCode: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('Registration successful!');
            navigate('/login'); // Redirect to login after successful registration
        } catch (error) {
            alert(error.response?.data?.error || 'Error registering user');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input type="text" className="form-control mb-3" placeholder="First Name" onChange={(e) => setFormData({ ...formData, userFirstName: e.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Last Name" onChange={(e) => setFormData({ ...formData, userLastName: e.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Currency" onChange={(e) => setFormData({ ...formData, currency: e.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="SWIFT Code" onChange={(e) => setFormData({ ...formData, swiftCode: e.target.value })} />
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    );
};

export default Register;
