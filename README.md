# 🔐 Authentication Learning Project

A hands-on learning project for understanding authentication implementation with **NestJS** (backend) and **React** (frontend).

## 📚 What You'll Learn

- JWT (JSON Web Token) authentication
- Password hashing with bcrypt
- Protected routes in React
- Auth context and state management
- API integration with Bearer tokens
- Passport.js strategies

## 🏗️ Project Structure

```
playing-with-authentication/
├── backend/                 # NestJS Backend API
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── guards/     # JWT & Local Auth Guards
│   │   │   ├── strategies/ # Passport Strategies
│   │   │   └── ...
│   │   ├── users/          # Users module
│   │   └── main.ts         # Entry point
│   └── package.json
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Auth Context (TODO)
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services (TODO)
│   │   └── types/          # TypeScript types
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

The backend will run on `http://localhost:3000`

📖 **Swagger Documentation**: `http://localhost:3000/api`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🧪 Test Credentials

A default user is seeded when the backend starts:

| Email         | Password |
| ------------- | -------- |
| admin@abc.com | Abcd1234 |

## 📝 Learning Tasks (TODOs)

This project has several incomplete sections marked with `🎯 TODO FOR LEARNERS`. Your task is to implement these sections:

### 1. Frontend: Auth Context (`src/context/AuthContext.tsx`)

Implement:

- [ ] Load saved token/user from localStorage on app start
- [ ] Save token/user to localStorage on login
- [ ] Clear localStorage on logout

### 2. Frontend: API Services (`src/services/authApi.ts`)

Implement:

- [ ] `loginApi()` - POST request to `/auth/login`
- [ ] `signupApi()` - POST request to `/auth/signup`
- [ ] `getProfileApi()` - GET request to `/auth/profile` (with Bearer token)
- [ ] `getAllUsersApi()` - GET request to `/users` (with Bearer token)

### 3. Understanding Protected Routes

Review how `ProtectedRoute.tsx` works and understand:

- How it checks authentication state
- How it redirects unauthenticated users
- How it preserves the intended destination

## 🔑 API Endpoints

### Public Endpoints

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| POST   | `/auth/login`  | Login with email/password |
| POST   | `/auth/signup` | Register a new user       |

### Protected Endpoints (Require JWT)

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/auth/profile` | Get current user profile |
| GET    | `/users`        | Get all users            |

### Request Examples

**Login:**

```javascript
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@abc.com',
    password: 'Abcd1234',
  }),
});
```

**Protected Request:**

```javascript
fetch('http://localhost:3000/auth/profile', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## 🎓 Learning Tips

1. **Start with the Swagger docs** - Visit `http://localhost:3000/api` to see all available endpoints and test them interactively.

2. **Use browser DevTools** - Check the Network tab to see API requests and responses.

3. **Check localStorage** - After implementing login, verify tokens are stored correctly.

4. **Read the error messages** - The TODOs throw helpful errors explaining what to implement.

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [React Router Documentation](https://reactrouter.com/)
- [JWT Introduction](https://jwt.io/introduction)
- [Passport.js Documentation](http://www.passportjs.org/)

## ✅ Solution Hints

<details>
<summary>Hint: loginApi implementation</summary>

```javascript
export async function loginApi(credentials) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
}
```

</details>

<details>
<summary>Hint: AuthContext login implementation</summary>

```javascript
const login = (newToken, newUser) => {
  localStorage.setItem('token', newToken);
  localStorage.setItem('user', JSON.stringify(newUser));
  setToken(newToken);
  setUser(newUser);
};
```

</details>

---

Happy Learning! 🎉
