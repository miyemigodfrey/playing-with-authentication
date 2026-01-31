import { useState, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginApi } from '../services/authApi';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page user tried to access before being redirected to login
  const from = location.state?.from?.pathname || '/dashboard';

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate(from, { replace: true });
  }

  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Implement the login logic here
      console.log('TODO: Implement login submission', { email, password });

      // Call the login API
      const response = await loginApi({ email, password });

      // Save to auth context
      login(response.access_token, response.user);

      // Navigate to the intended page
      navigate(from, { replace: true });
      
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-6'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
        <h2 className='text-2xl text-gray-900 font-semibold mb-4 text-center'>Login</h2>

        <div className='bg-yellow-50 border border-yellow-200 rounded p-4 mb-4'>
          <h4 className='font-medium mb-1'>Hello Fan</h4>
          <p className='text-sm text-yellow-800'>
            Welcome to our Exclusive Dashboard login if you have an account, if not  click the sign up button below to register!
          </p>
        </div>

        {error && <div className='bg-red-50 text-red-600 p-3 rounded mb-4 text-center'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='admin@abc.com'
              required
              className='w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
              className='w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none'
            />
          </div>

          <button type='submit' className='w-full p-3 bg-pink-600 text-white rounded hover:bg-pink-500 disabled:bg-gray-300' disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className='text-center mt-4 text-sm text-gray-600'>
          Don't have an account? <Link to='/signup' className='text-pink-600 hover:underline'>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
