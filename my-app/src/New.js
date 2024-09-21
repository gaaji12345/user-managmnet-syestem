// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './component/common/NavBar';
import LoginPage from './component/auth/LoginPage';
import RegistrationPage from './component/auth/RegistarionPage';
import FooterComponent from './component/common/Footer';
import UserService from './component/service/UserService';
import UpdateUser from './component/userpage/UpdateUser';
import UserManagementPage from './component/userpage/UserMangment';
import ProfilePage from './component/userpage/ProfilePage';




function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<LoginPage />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        {/* Check if user is authenticated and admin before rendering admin-only routes */}
                        {UserService.adminOnly() && (
                            <>
                                <Route path="/register" element={<RegistrationPage />} />
                                <Route path="/admin/user-management" element={<UserManagementPage />} />
                                <Route path="/update-user/:userId" element={<UpdateUser />} />
                            </>
                        )}
                        <Route path="*" element={<Navigate to="/login" />} />‰
                    </Routes>
                </div>
                <FooterComponent />
            </div>
        </BrowserRouter>
    );
}

export default App;
