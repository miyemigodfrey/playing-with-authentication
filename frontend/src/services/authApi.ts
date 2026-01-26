import {
  LoginCredentials,
  SignupCredentials,
  AuthResponse,
  User,
} from '../types/auth';

const API_URL = 'http://localhost:3000';

/**
 * 🎯 AUTH API SERVICE
 *
 * This service handles all API calls related to authentication.
 * Learners should implement these functions to connect to the backend.
 */

// TODO: Implement login API call
export async function loginApi(
  credentials: LoginCredentials,
): Promise<AuthResponse> {

const response = await fetch(`${API_URL}/auth/login`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
}


// TODO: Implement signup API call
export async function signupApi(
  credentials: SignupCredentials,
): Promise<AuthResponse> {

const response = await fetch(`${API_URL}/auth/signup`,{
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials),
})  

if(!response.ok){
    throw new Error('Your Signup failed');
  }
  return response.json();
}

// TODO: Implement get profile API call
export async function getProfileApi(token: string): Promise<User> {
  /**
   * 🎯 TODO FOR LEARNERS:
   *
   * Implement the get profile API call using fetch.
   * This is a PROTECTED route - you need to send the JWT token!
   *
   * Endpoint: GET /auth/profile
   * Headers: Authorization: Bearer <token>
   *
   * Steps:
   * 1. Make a GET request to `${API_URL}/auth/profile`
   * 2. Include the Authorization header with the Bearer token
   * 3. Check if the response is ok, if not throw an error
   * 4. Parse and return the JSON response
   *
   * Example:
   * const response = await fetch(`${API_URL}/auth/profile`, {
   *   headers: { 'Authorization': `Bearer ${token}` },
   * });
   */

  // Remove this placeholder and implement the actual API call
  console.log('TODO: Implement getProfileApi', token);
  throw new Error(
    'Get Profile API not implemented yet. Check src/services/authApi.ts',
  );
}

// TODO: Implement get all users API call (protected)
export async function getAllUsersApi(token: string): Promise<User[]> {
  /**
   * 🎯 TODO FOR LEARNERS:
   *
   * Implement the get all users API call using fetch.
   * This is a PROTECTED route - you need to send the JWT token!
   *
   * Endpoint: GET /users
   * Headers: Authorization: Bearer <token>
   *
   * Steps:
   * 1. Make a GET request to `${API_URL}/users`
   * 2. Include the Authorization header with the Bearer token
   * 3. Check if the response is ok, if not throw an error
   * 4. Parse and return the JSON response
   */

  // Remove this placeholder and implement the actual API call
  console.log('TODO: Implement getAllUsersApi', token);
  throw new Error(
    'Get All Users API not implemented yet. Check src/services/authApi.ts',
  );
}
