import React, { useState } from 'react';
import { loginUser } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};
export default Login;