# 🚀 AssetFlow ERP
### Enterprise Asset Management System | Odoo Hackathon 2026

<p align="center">

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js"/>
<img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb"/>
<img src="https://img.shields.io/badge/MUI-v9-007FFF?style=for-the-badge&logo=mui"/>
<img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss"/>
<img src="https://img.shields.io/badge/Odoo-Hackathon%202026-purple?style=for-the-badge"/>

</p>

---

# 📖 Overview

AssetFlow ERP is a modern Enterprise Asset Management platform developed during the **Odoo Hackathon 2026**.

The platform enables organizations to manage assets, bookings, allocations, maintenance, audits, notifications and reporting from a single intelligent dashboard.

Designed with scalability, security and enterprise usability in mind.

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Secure Login
- User Registration
- Password Hashing using bcrypt
- Protected Routes

---

## 🏢 Organization Management

- Departments
- Employees
- Roles
- User Profiles

---

## 📦 Asset Management

- Add Assets
- Edit Assets
- Delete Assets
- Asset Categories
- Asset Status
- Asset History

---

## 📋 Allocation Management

- Allocate Assets
- Return Assets
- Allocation History

---

## 📅 Booking Module

- Book Assets
- Booking Approval
- Booking Status

---

## 🔧 Maintenance

- Maintenance Requests
- Maintenance Tracking
- Asset Health

---

## 🔍 Audit

- Asset Audit
- Audit Items
- Verification Logs

---

## 📊 Dashboard

- KPI Cards
- Analytics
- Asset Distribution
- Recent Assets
- Insights

---

## 🔔 Notifications

- System Notifications
- Alerts
- Activity Updates

---

## 👤 Profile

- Profile Management
- Update Details

---

## ⚙ Settings

- Theme Switching
- Preferences

---

# 🏗 Project Architecture

```
Frontend (React + MUI + Tailwind)

↓

Express REST API

↓

MongoDB Atlas
```

---

# 🛠 Tech Stack

### Frontend

- React
- React Router
- Material UI
- TailwindCSS
- Framer Motion
- Axios
- Recharts

### Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Mongoose

### Database

- MongoDB Atlas

---

# 📂 Project Structure

```
frontend/

src/

components/

pages/

routes/

context/

styles/

backend/

src/

controllers/

models/

routes/

middlewares/

config/

server.js
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/assetflow.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

# ⚙ Environment Variables

Create a `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

JWT_EXPIRES_IN=7d
```

---

# 🌐 API Routes

## Authentication

```
POST /api/auth/signup

POST /api/auth/login

GET /api/auth/me
```

---

## Assets

```
GET /api/assets

POST /api/assets

PUT /api/assets/:id

DELETE /api/assets/:id
```

---

## Departments

```
GET /api/departments

POST /api/departments
```

---

## Categories

```
GET /api/categories

POST /api/categories
```

---

## Booking

```
GET /api/bookings

POST /api/bookings
```

---

## Allocation

```
GET /api/allocations

POST /api/allocations
```

---

## Maintenance

```
GET /api/maintenance

POST /api/maintenance
```

---

## Audit

```
GET /api/audits

POST /api/audits
```

---

## Notifications

```
GET /api/notifications
```

---

# 📸 Screenshots

## Landing Page

> Add Screenshot Here

---

## Dashboard

> Add Screenshot Here

---

## Asset Management

> Add Screenshot Here

---

## Reports

> Add Screenshot Here

---

# 🔒 Security

- JWT Authentication
- Password Hashing
- Protected Routes
- Role Based Access
- Input Validation

---

# 📈 Future Scope

- QR Code Asset Tracking
- Barcode Scanner
- Email Notifications
- AI Asset Prediction
- Asset Lifecycle Analytics
- Mobile Application
- Odoo Integration

---

# 👨‍💻 Team

**Odoo Hackathon 2026 Team**

- Team Leader
- Frontend Developers
- Backend Developers
- Database Developer

---

# 📄 License

This project was developed for the **Odoo Hackathon 2026**.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

<p align="center">

Made with ❤️ using React, Node.js, MongoDB & Material UI

</p>
