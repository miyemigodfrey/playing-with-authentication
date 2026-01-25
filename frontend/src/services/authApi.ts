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
  /**
   * 🎯 TODO FOR LEARNERS:
   *
   * Implement the login API call using fetch.
   *
   * Endpoint: POST /auth/login
   * Body: { email, password }
   *
   * Steps:
   * 1. Make a POST request to `${API_URL}/auth/login`
   * 2. Set the Content-Type header to 'application/json'
   * 3. Send the credentials in the request body
   * 4. Check if the response is ok, if not throw an error
   * 5. Parse and return the JSON response
   *
   * Example:
   * const response = await fetch(`${API_URL}/auth/login`, {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify(credentials),
   * });
   */

  // Remove this placeholder and implement the actual API call
  console.log('TODO: Implement loginApi', credentials);
  throw new Error(
    'Login API not implemented yet. Check src/services/authApi.ts',
  );
}

// TODO: Implement signup API call
export async function signupApi(
  credentials: SignupCredentials,
): Promise<AuthResponse> {
  /**
   * 🎯 TODO FOR LEARNERS:
   *
   * Implement the signup API call using fetch.
   *
   * Endpoint: POST /auth/signup
   * Body: { email, password, name }
   *
   * Steps:
   * 1. Make a POST request to `${API_URL}/auth/signup`
   * 2. Set the Content-Type header to 'application/json'
   * 3. Send the credentials in the request body
   * 4. Check if the response is ok, if not throw an error
   * 5. Parse and return the JSON response
   */

  // Remove this placeholder and implement the actual API call
  console.log('TODO: Implement signupApi', credentials);
  throw new Error(
    'Signup API not implemented yet. Check src/services/authApi.ts',
  );
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
