import type {
    LoginCredentials,
    SignupCredentials,
    User,
    AuthResponse,
} from '../types/auth';

const API_URL = 'http://localhost:3000';

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
    }return response.json();
}

export async function signupApi(
    credentials: SignupCredentials,): Promise<AuthResponse>{
        const response = await fetch(`${API_URL}/auth/signup`,{
        method: 'POST',
        headers:{ 'content-type': 'application/json'},
        body: JSON.stringify(credentials),
    })
    if(!response.ok){
        throw new Error('Your Signup failed');
    }return response.json();
}

export async function getProfileApi(token: string): Promise<User> {
  const response = await fetch(`${API_URL}/auth/profile`,{
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  })
  if (!response.ok) {
    throw new Error('Fetching profile failed');
  }
  return response.json();
}


export async function getAllUsersApi(token: string): Promise<User[]> {

 const response = await fetch(`${API_URL}/users`,{
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  })
  if (!response.ok) {
    throw new Error('Fetching all users failed');
  }
  return response.json();
}


