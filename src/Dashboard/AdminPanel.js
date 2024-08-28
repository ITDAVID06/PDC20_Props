import React from "react";
import './AdminPanel.css'; 

function AdminPanel({ user }) {
    return (
        <div className="dashboard-container">
            {user.isAdmin ? (
                <div className="admin-dashboard">
                    <h1 className="dashboard-title">Admin Dashboard</h1>
                    <p className="dashboard-welcome">Welcome Admin, {user.name}!</p>
                    <div className="button-group">
                        <button className="dashboard-button">Add New Users</button>
                        <button className="dashboard-button">Manage Users</button>
                        <button className="dashboard-button">Manage Settings</button>
                        <button className="dashboard-button">View Reports</button>
                    </div>
                </div>
            ) : (
                <div className="user-dashboard">
                    <h1 className="dashboard-title">User Dashboard</h1>
                    <p className="dashboard-welcome">Welcome User, {user.name}!</p>
                    <div className="button-group">
                        <button className="dashboard-button">Update Profile Information</button>
                        <button className="dashboard-button">Settings</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
