# 💰 Spendly – Expense & Income Tracker  

Spendly is a full-stack web application that helps users manage their **income and expenses**, visualize reports, and stay in control of their personal finances.  

---

## 🚀 Features  

- 🔐 **Authentication & Authorization** (JWT-based login/signup)  
- 👤 **User Profile** with profile picture upload (crop & zoom support)  
- 📊 **Dashboard** displaying recent transactions, charts & totals  
- 🧾 **Expense & Income Management** (add, update, delete)  
- 📑 **Reports** – export and download transaction reports  
- 🌗 **Responsive UI** with modern design (React + Tailwind + shadcn/ui)  

---

## 🛠️ Tech Stack  

### Frontend  
- React + Vite  
- TailwindCSS + shadcn/ui  
- Recharts (data visualization)  
- Axios (API requests)  
- React Context (state management)  

### Backend  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT (JSON Web Token) Authentication  
- Multer (file uploads)  

---

## 📂 Project Structure  

```
.
├── backend/              # Express API
│   ├── controllers/      # Route controllers (auth, expenses, income, reports)
│   ├── middleware/       # JWT auth middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API endpoints
│   └── server.js         # Entry point
│
├── frontend/             # React client
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # User/Auth context
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Dashboard, Reports, etc.
│   │   └── utils/        # API paths, helpers
│   └── package.json
│
└── README.md
```

---

## ⚡ Getting Started  

### 1️⃣ Clone the repo  
```bash
git clone https://github.com/your-username/spendly.git
cd spendly
```

### 2️⃣ Backend setup  
```bash
cd backend
npm install
```

Create a `.env` file:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:  
```bash
npm run dev
```

### 3️⃣ Frontend setup  
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔑 Authentication Flow  

1. User signs up / logs in  
2. Backend issues a JWT token  
3. Token is stored in `localStorage`  
4. All protected routes use `Authorization: Bearer <token>` header  

---

## 📸 Profile Picture Upload  

- User can upload a profile picture  
- Image can be cropped & zoomed before saving  
- Stored in backend and displayed in navbar/dashboard  

---

## 📝 Available Scripts  

### Backend  
- `npm run dev` → start server with nodemon  
- `npm start` → start server in production  

### Frontend  
- `npm run dev` → run React app  
- `npm run build` → build for production  

---

## ✅ Roadmap  

- [ ] Add categories for expenses/income  
- [ ] Dark mode  
- [ ] Multi-language support  
- [ ] Monthly budget goals  

---

## 📄 License  

License © 2025 Thulebona Gwala  
