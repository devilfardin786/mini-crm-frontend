This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# 🏆 Mini CRM - Assignment Submission  

## 📌 Project Overview  
Mini CRM is a lightweight **customer relationship management system** that allows businesses to create targeted campaigns, track campaign performance, and automate outreach using AI-powered scheduling.  

## 🎯 Features  
✅ **Campaign Creation with Audience Segmentation**  
✅ **AI-based Smart Scheduling**  
✅ **Google Authentication**  
✅ **Real-time Campaign Delivery Logging**  
✅ **Vendor API Simulation for Message Delivery**  

---

## 🚀 Local Setup Instructions  

### **🖥 Prerequisites**  
1️⃣ Install [Node.js](https://nodejs.org/) (Latest LTS version)  
2️⃣ Install [MongoDB Atlas](https://www.mongodb.com/) or use a local MongoDB server  
3️⃣ Install [Git](https://git-scm.com/)  

### **📂 Clone the Repository**  
```bash
git clone https://github.com/yourusername/mini-crm.git
cd mini-crm

🔧 Backend Setup
cd backend
npm install


✍ Create .env file in backend/
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://mini_crm_user:minicrm1234@cluster0.mongodb.net
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
OPENAI_API_KEY=your-openai-api-key
BASE_URL=http://localhost:5000
FRONTEND_URL=http://localhost:3000


✔ Start the backend server:
npm start


🚀 Backend is now running at: http://localhost:5000

🖥 Frontend Setup
cd frontend
npm install


✍ Create .env.local file in frontend/
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret


✔ Start the frontend app:
npm run dev


🚀 Frontend is now running at: http://localhost:3000

📊 Architecture Diagram
Mini CRM Architecture (Insert actual image URL if hosted online)
                         ┌──────────────────────────┐
                          │        FRONTEND (Vercel) │
                          │ Next.js (React)          │
                          └─────────┬───────────────┘
                                    │
                                    ▼
                          ┌──────────────────────────┐
                          │     BACKEND (Render)     │
                          │ Node.js, Express, MongoDB│
                          └─────────┬───────────────┘
                                    │
                                    ▼
                          ┌──────────────────────────┐
                          │  Database (MongoDB Atlas)│
                          │ Campaigns, Logs, Users   │
                          └──────────────────────────┘


✔ Frontend calls backend APIs (/api/campaigns, /api/auth/google)
✔ Backend processes campaign logic & authentication
✔ MongoDB stores campaign data & logs

🤖 AI Tools & Technologies Used
🔹 OpenAI API → AI-powered campaign scheduling
🔹 Google OAuth → Secure login with Google
🔹 Next.js (React) → Modern frontend framework
🔹 MongoDB Atlas → Cloud database for storing users & campaigns
🔹 Express.js → Backend framework for API handling

⚠️ Known Limitations & Assumptions
🚨 Limitations:
- No real email/SMS integration → Vendor API is simulated
- Authentication only via Google → No manual account creation
- Basic AI scheduling logic → Can be enhanced with real-time AI optimization
🚧 Assumptions:
- Users are defined in the database before creating campaigns
- Campaigns are limited to basic targeting (Spend, Visits, Inactive Days)

🎉 Mini CRM is now fully set up! 🚀
✔ Follow the above steps to deploy it on Render & Vercel!

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
