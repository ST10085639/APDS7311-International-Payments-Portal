import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            alert(response.data.message);
            navigate('/'); // Redirect to dashboard after login
        } catch (error) {
            alert(error.response?.data?.error || 'Invalid credentials');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input type="text" className="form-control mb-3" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default Login;
