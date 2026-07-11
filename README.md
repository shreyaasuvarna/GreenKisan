# 🌱 Green Kisan

A full-stack web platform that connects **farmers** and **industries** for buying and selling crop residue — reducing agricultural waste and creating economic value.

---

## 📌 About the Project

Green Kisan is a PBL (Project-Based Learning) project built as part of a Full Stack Development course. It provides a marketplace where farmers can list their crop residue, and industries can search, book, and purchase it directly.

---

## ✨ Features

**For Farmers**
- Sign up / Sign in
- Add and manage crop residue listings (with image upload)
- View bookings and sales
- Receive alerts/notifications
- Government schemes information page
- Kannada language support (i18n)

**For Industries**
- Sign up / Sign in
- Search and filter crop residue listings
- Book / pre-book residue
- View orders and manage bookings
- Payment integration (Razorpay)
- Alerts/notifications

---

## Tech Stack

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | React 19, React Router v7, Tailwind CSS, Vite |
| Backend   | Node.js, Express.js                  |
| Database  | MongoDB (Mongoose)                   |
| Auth      | JWT, bcryptjs                        |
| File Upload | Multer                             |

---

## Project Structure

```
├── backend/
│   ├── config/         # DB connection
│   ├── controllers/    # Business logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── uploads/        # Uploaded images
│   └── server.js
│
└── frontend/
    └── src/
        ├── pages/      # All React page components
        ├── context/    # Language context (i18n)
        ├── styles/     # CSS files
        └── utils/
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=5000
```

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:5000`.

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/farmer/signup` | Farmer registration |
| POST | `/api/farmer/signin` | Farmer login |
| POST | `/api/industry/signup` | Industry registration |
| POST | `/api/industry/signin` | Industry login |
| GET/POST | `/api/residue/` | Get / add crop residue |
| GET/POST | `/api/bookings/` | Manage bookings |
| GET | `/api/notifications/` | Get notifications |

---

## ⚠️ Important — Before Pushing to GitHub

- **Do NOT commit your `.env` file.** Add it to `.gitignore`:
  ```
  backend/.env
  backend/uploads/
  node_modules/
  ```
- The `.env` currently contains real MongoDB credentials — **rotate those immediately** if this repo is going public.

---

## 👥 Team

Built as part of a Full Stack Development PBL project.

---

## 📄 License

This project is for educational purposes.
