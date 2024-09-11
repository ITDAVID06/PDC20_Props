import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import './LogAdmin.css'; 
import { useNavigate } from 'react-router-dom';

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const [loginAttempts, setLoginAttempts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = () => {

        const validAdminCredentials = {
            username: 'user123',
            password: 'pass123'
        };

        const isAdmin = accountType === 'admin';
        if(isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)){
            setUser({ name: username, isAdmin });
        } else if(!isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)) {
            setUser({ name: username, isAdmin : false });
        } else {
            setLoginAttempts(prevAttempts => prevAttempts + 1);
            setErrorMessage('Invalid Credentials');

            if (loginAttempts +1 >= 3){
                navigate('');
            }
        }
        
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
