# Project Camp Backend Project

This project is a **backend service** for managing camp-related features with a **complete authentication system**.  
It is built using **Node.js**, **Express.js**, and **MongoDB** with secure practices for user authentication and authorization.  

---

## Features

### Authentication & User Management
- **Register User** – Create a new user with email & password
- **Login** – Authenticate user & return JWT tokens
- **Logout User** – Invalidate refresh token on logout
- **Get Current User** – Fetch logged-in user details
- **Change Current Password** – Update user password securely

### Email Verification
- **Verify Email** – Verify user account via token
- **Resend Email Verification** – Resend verification link

### Token Management
- **Refresh Access Token** – Get new access token using refresh token

### Password Reset
- **Forgot Password Request** – Send password reset link
- **Reset Forgot Password** – Reset password using token

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Authentication**: JWT (Access + Refresh Tokens), bcrypt  
- **Email Service**: Nodemailer  
- **Environment Management**: dotenv  

---