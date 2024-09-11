import React from "react";
import './AdminPanel.css'; 

function AuthError() {
    return (
        <div className="dashboard-container">
            <div className="admin-dashboard">
                <h1 className="dashboard-title">Authentication Error</h1>
                <p className="dashboard-welcome">You are not an Admin!</p>
                <div className="button-group">
                    <button className="dashboard-button">Not Admin</button>
                    <button className="dashboard-button">Forgot Passsword?</button>
                    <button className="dashboard-button">Contact Us</button>
                    <button className="dashboard-button">Call Kevin</button>
                </div>
            </div>
        </div>
    );
}

export default AuthError;