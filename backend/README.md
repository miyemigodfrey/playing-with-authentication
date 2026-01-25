# 🔐 Authentication Backend (NestJS)

A NestJS backend API implementing JWT authentication with Passport.js for learning purposes.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Run in production mode
npm run start:prod
```

Server runs on `http://localhost:3000`

## 📖 API Documentation (Swagger)

Once the server is running, visit: **http://localhost:3000/api**

Interactive documentation to test all endpoints!

## 🔑 Default User

A user is automatically seeded on startup:

| Email         | Password |
| ------------- | -------- |
| admin@abc.com | Abcd1234 |

## 📡 API Endpoints

### Public Routes

| Method | Endpoint       | Description | Body                        |
| ------ | -------------- | ----------- | --------------------------- |
| POST   | `/auth/login`  | Login       | `{ email, password }`       |
| POST   | `/auth/signup` | Register    | `{ email, password, name }` |

### Protected Routes (Require Bearer Token)

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/auth/profile` | Get current user |
| GET    | `/users`        | Get all users    |

## 🏗️ Project Structure

```
src/
├── auth/
│   ├── dto/
│   │   └── auth.dto.ts          # Request/Response DTOs
│   ├── guards/
│   │   ├── jwt-auth.guard.ts    # JWT authentication guard
│   │   └── local-auth.guard.ts  # Local (username/password) guard
│   ├── strategies/
│   │   ├── jwt.strategy.ts      # JWT Passport strategy
│   │   └── local.strategy.ts    # Local Passport strategy
│   ├── auth.controller.ts       # Auth endpoints
│   ├── auth.module.ts           # Auth module definition
│   ├── auth.service.ts          # Auth business logic
│   └── constants.ts             # JWT secret key
├── users/
│   ├── user.entity.ts           # User type definitions
│   ├── users.controller.ts      # User endpoints
│   ├── users.module.ts          # Users module definition
│   └── users.service.ts         # Users business logic + in-memory storage
├── app.module.ts                # Root module
└── main.ts                      # Application entry point
```

## 🔧 Key Technologies

- **NestJS** - Node.js framework
- **Passport.js** - Authentication middleware
- **@nestjs/jwt** - JWT token handling
- **bcrypt** - Password hashing
- **Swagger** - API documentation
- **class-validator** - Request validation

## 📝 How It Works

### 1. User Registration (`POST /auth/signup`)

```javascript
// Request
{
  "email": "user@example.com",
  "password": "SecurePass123",
  "name": "John Doe"
}

// Response
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "user": { "id": 2, "email": "user@example.com", "name": "John Doe" }
}
```

### 2. User Login (`POST /auth/login`)

```javascript
// Request
{
  "email": "admin@abc.com",
  "password": "Abcd1234"
}

// Response
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "user": { "id": 1, "email": "admin@abc.com", "name": "Admin User" }
}
```

### 3. Accessing Protected Routes

```javascript
// Include the token in Authorization header
fetch('http://localhost:3000/auth/profile', {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1...',
  },
});
```

## 🔒 Authentication Flow

```
1. User sends credentials (email/password)
        ↓
2. Server validates credentials against stored users
        ↓
3. Server hashes password comparison using bcrypt
        ↓
4. If valid, server creates JWT token with user info
        ↓
5. Client stores token and sends with future requests
        ↓
6. Server validates JWT on protected routes using JwtAuthGuard
```

## ⚠️ Important Notes

- **No Database**: Users are stored in an in-memory array (resets on restart)
- **JWT Secret**: Located in `src/auth/constants.ts` - change in production!
- **Token Expiry**: Tokens expire after 1 hour
- **CORS**: Configured for `http://localhost:5173` (React frontend)

## 🎓 Learning Points

1. **Guards** - How NestJS protects routes (`@UseGuards(JwtAuthGuard)`)
2. **Strategies** - Passport.js authentication strategies
3. **DTOs** - Data validation with class-validator
4. **Decorators** - `@ApiBearerAuth()`, `@ApiOperation()`, etc.
5. **Modules** - NestJS modular architecture

## 📚 Resources

- [NestJS Authentication Docs](https://docs.nestjs.com/security/authentication)
- [Passport.js](http://www.passportjs.org/)
- [JWT.io](https://jwt.io/)
