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

    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement the login form submission.
     *
     * Steps:
     * 1. Call the loginApi function with email and password
     * 2. If successful, call the login function from AuthContext
     *    with the token and user from the response
     * 3. Navigate to the 'from' path (or dashboard)
     * 4. Handle any errors by setting the error state
     *
     * Example:
     * try {
     *   const response = await loginApi({ email, password });
     *   login(response.access_token, response.user);
     *   navigate(from, { replace: true });
     * } catch (err) {
     *   setError(err.message || 'Login failed');
     * } finally {
     *   setIsLoading(false);
     * }
     */

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
    <div className='page'>
      <div className='form-container'>
        <h2 className='form-title'>Login</h2>

        <div className='todo-notice'>
          <h4>🎯 Learning Task</h4>
          <p>
            This form calls <code>loginApi</code> from <code>authApi.ts</code>.
            Implement the API function to make it work!
          </p>
        </div>

        {error && <div className='form-error'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='admin@abc.com'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
            />
          </div>

          <button type='submit' className='form-button' disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className='form-link'>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
