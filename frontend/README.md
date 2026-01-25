# 🔐 Authentication Frontend (React)

A React frontend for learning authentication with protected routes, context management, and API integration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

App runs on `http://localhost:5173`

> ⚠️ Make sure the backend is running on `http://localhost:3000` first!

## 🎯 Learning Tasks (TODOs)

This project has intentionally incomplete sections. Your task is to implement them!

### Task 1: Auth Context (`src/context/AuthContext.tsx`)

Implement these functions:

- [ ] **Initialize from localStorage** - Load saved token/user on app start
- [ ] **login()** - Save token and user to localStorage + state
- [ ] **logout()** - Clear localStorage and state

### Task 2: API Services (`src/services/authApi.ts`)

Implement these API calls:

- [ ] **loginApi()** - POST to `/auth/login`
- [ ] **signupApi()** - POST to `/auth/signup`
- [ ] **getProfileApi()** - GET from `/auth/profile` (with Bearer token)
- [ ] **getAllUsersApi()** - GET from `/users` (with Bearer token)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   └── ProtectedRoute.tsx      # Route protection wrapper
├── context/
│   └── AuthContext.tsx         # Auth state management (TODO)
├── pages/
│   ├── HomePage.tsx            # Public landing page
│   ├── LoginPage.tsx           # Login form
│   ├── SignupPage.tsx          # Registration form
│   ├── DashboardPage.tsx       # Protected - shows all users
│   └── ProfilePage.tsx         # Protected - shows user profile
├── services/
│   └── authApi.ts              # API calls (TODO)
├── types/
│   └── auth.ts                 # TypeScript interfaces
├── App.tsx                     # Router setup
├── main.tsx                    # Entry point
└── index.css                   # Global styles
```

## 📄 Pages Overview

| Page      | Route        | Auth Required | Description                    |
| --------- | ------------ | ------------- | ------------------------------ |
| Home      | `/`          | ❌            | Landing page with instructions |
| Login     | `/login`     | ❌            | Login form                     |
| Signup    | `/signup`    | ❌            | Registration form              |
| Dashboard | `/dashboard` | ✅            | Shows list of all users        |
| Profile   | `/profile`   | ✅            | Shows current user info        |

## 🔧 Key Concepts

### 1. Protected Routes

```tsx
// In App.tsx
<Route
  path='/dashboard'
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
```

The `ProtectedRoute` component:

- Checks if user is authenticated
- Redirects to `/login` if not
- Preserves intended destination for redirect after login

### 2. Auth Context

```tsx
// Using the auth context in components
const { user, token, isAuthenticated, login, logout } = useAuth();
```

### 3. API Calls with Bearer Token

```javascript
// Protected endpoint example
fetch('http://localhost:3000/auth/profile', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## ✅ Implementation Guide

### Step 1: Implement `loginApi` in `authApi.ts`

```javascript
export async function loginApi(credentials: LoginCredentials): Promise<AuthResponse> {
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

### Step 2: Implement `login` in `AuthContext.tsx`

```javascript
const login = (newToken: string, newUser: User) => {
  localStorage.setItem('token', newToken);
  localStorage.setItem('user', JSON.stringify(newUser));
  setToken(newToken);
  setUser(newUser);
};
```

### Step 3: Implement `logout` in `AuthContext.tsx`

```javascript
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  setToken(null);
  setUser(null);
};
```

### Step 4: Implement initialization in `useEffect`

```javascript
useEffect(() => {
  const savedToken = localStorage.getItem('token');
  const savedUser = localStorage.getItem('user');

  if (savedToken && savedUser) {
    try {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    } catch (e) {
      console.error('Failed to parse saved user');
    }
  }
  setIsLoading(false);
}, []);
```

## 🧪 Testing Your Implementation

1. **Start the backend** (`npm run start:dev` in backend folder)
2. **Start the frontend** (`npm run dev` in frontend folder)
3. **Try to access** `/dashboard` - should redirect to login
4. **Login** with `admin@abc.com` / `Abcd1234`
5. **Check** Dashboard shows users, Profile shows your info
6. **Refresh** the page - should stay logged in
7. **Logout** and verify redirect to home

## 🔍 Debugging Tips

1. **Check Network Tab** - See API requests/responses
2. **Check Application Tab** - Verify localStorage values
3. **Check Console** - Look for TODO messages and errors
4. **Use Swagger** - Test API endpoints directly at `http://localhost:3000/api`

## 📚 Resources

- [React Router Docs](https://reactrouter.com/)
- [React Context API](https://react.dev/reference/react/useContext)
- [Using Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🎓 What You'll Learn

- ✅ React Router for navigation
- ✅ Protected/Private routes pattern
- ✅ React Context for global state
- ✅ JWT token storage and usage
- ✅ API integration with auth headers
- ✅ Form handling in React
- ✅ TypeScript with React
