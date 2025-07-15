# 🎓 College Booking Web Application

A fully functional MERN stack web application where users can explore colleges, book admissions, and submit reviews. Built using **Next.js**, **MongoDB**, **Tailwind CSS**, and **Node.js**.

🔗 **Live Preview**: [https://book-college.vercel.app](https://book-college.vercel.app)

---

## 📌 Features

- 🔍 **Search Colleges** by name
- 🎓 **College Details** with admission dates, events, research, and sports info
- 📝 **Admission Form** with full validation
- ✍️ **User Reviews** with star ratings
- 🖼️ **Graduate Image Gallery**
- 📚 **Research Paper Links** section
- 🔐 **Authentication** via email, Google, and social login
- 👤 **User Profile** with editable info
- 📵 **Protected Routes** (e.g. only logged-in users can submit reviews)
- 📱 **Fully Responsive Design**
- ❌ **Custom 404 Page**

---

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose
- **Authentication**: NextAuth.js (Email + Resend)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## 📁 Project Structure

├── components/ # Reusable components
├── pages/ # All routes & views
│ ├── api/ # API routes for auth/data
│ ├── colleges/ # College details, listing
│ ├── admission/ # Admission forms
│ ├── my-college/ # Submitted info & reviews
│ ├── profile/ # User profile & edit
├── utils/ # Utility functions (e.g., auth, db)
├── styles/ # Global styles
└── public/ # Static assets


---
<!-- 
## 📸 Screenshots

*(Include relevant screenshots here if possible, like home page, college card, admission form, review section, etc.)* -->

---

## 🛠️ Installation & Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/book-college.git
cd book-college

# Install dependencies
npm install

# Create .env.local and add your environment variables
cp .env.example .env.local

# Run the dev server
npm run dev


NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string
AUTH_RESEND_KEY=your_resend_api_key
AUTH_SECRET=your_next_auth_secret
