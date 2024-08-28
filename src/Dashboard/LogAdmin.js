import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import './LogAdmin.css'; 

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    };

    return (
        <div className="login-container">
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="login-form">
                    <h1 className='center'>ReactJs</h1>
                    <h1 className="login-title">Log in</h1>
                    <div className="input-group">
                        <label className="input-label">Username:</label>
                        <input
                            type="text"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password:</label>
                        <input
                            type="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Account Type:</label>
                        <select
                            className="input-field"
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button className="login-button" onClick={handleLogin}>Log In</button>
                </div>
            )}
        </div>
    );
}

export default LogAdmin;
