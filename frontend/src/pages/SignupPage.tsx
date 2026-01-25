import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signupApi } from '../services/authApi';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/dashboard', { replace: true });
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement the signup form submission.
     *
     * Steps:
     * 1. Call the signupApi function with name, email, and password
     * 2. If successful, call the login function from AuthContext
     *    with the token and user from the response
     * 3. Navigate to the dashboard
     * 4. Handle any errors by setting the error state
     *
     * Example:
     * try {
     *   const response = await signupApi({ name, email, password });
     *   login(response.access_token, response.user);
     *   navigate('/dashboard', { replace: true });
     * } catch (err) {
     *   setError(err.message || 'Signup failed');
     * } finally {
     *   setIsLoading(false);
     * }
     */

    try {
      // TODO: Implement the signup logic here
      console.log('TODO: Implement signup submission', {
        name,
        email,
        password,
      });

      // Call the signup API
      const response = await signupApi({ name, email, password });

      // Save to auth context
      login(response.access_token, response.user);

      // Navigate to dashboard
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='page'>
      <div className='form-container'>
        <h2 className='form-title'>Create Account</h2>

        <div className='todo-notice'>
          <h4>🎯 Learning Task</h4>
          <p>
            This form calls <code>signupApi</code> from <code>authApi.ts</code>.
            Implement the API function to make it work!
          </p>
        </div>

        {error && <div className='form-error'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='john@example.com'
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
              placeholder='Minimum 6 characters'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm your password'
              required
            />
          </div>

          <button type='submit' className='form-button' disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className='form-link'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
