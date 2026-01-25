import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className='page'>
      <div className='hero'>
        <h1>🔐 Authentication Learning App</h1>
        <p>
          Learn how to implement authentication in React with JWT tokens,
          protected routes, and API integration.
        </p>
        <div className='hero-buttons'>
          {isAuthenticated ? (
            <Link to='/dashboard' className='hero-button primary'>
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to='/login' className='hero-button primary'>
                Login
              </Link>
              <Link to='/signup' className='hero-button secondary'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <h2 className='page-title'>What You'll Learn</h2>
      <div className='features'>
        <div className='feature-card'>
          <div className='feature-icon'>🔑</div>
          <h3>JWT Authentication</h3>
          <p>
            Learn how JSON Web Tokens work and how to use them for
            authentication.
          </p>
        </div>
        <div className='feature-card'>
          <div className='feature-icon'>🛡️</div>
          <h3>Protected Routes</h3>
          <p>
            Implement route protection to secure pages that require
            authentication.
          </p>
        </div>
        <div className='feature-card'>
          <div className='feature-icon'>🔄</div>
          <h3>Auth Context</h3>
          <p>
            Use React Context to manage authentication state across your app.
          </p>
        </div>
        <div className='feature-card'>
          <div className='feature-icon'>📡</div>
          <h3>API Integration</h3>
          <p>Connect to a backend API and handle authentication requests.</p>
        </div>
      </div>

      <div className='todo-notice' style={{ marginTop: '2rem' }}>
        <h4>📚 Learning Instructions</h4>
        <p>
          This app has several TODO sections for you to complete. Check the
          following files:
        </p>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>
            <code>src/context/AuthContext.tsx</code> - Auth state management
          </li>
          <li>
            <code>src/services/authApi.ts</code> - API calls
          </li>
          <li>
            <code>src/pages/LoginPage.tsx</code> - Login form handling
          </li>
          <li>
            <code>src/pages/SignupPage.tsx</code> - Signup form handling
          </li>
        </ul>
      </div>

      <div className='card' style={{ marginTop: '2rem' }}>
        <h3 className='card-title'>🧪 Test Credentials</h3>
        <p>Use these credentials to test the login functionality:</p>
        <p style={{ marginTop: '0.5rem' }}>
          <strong>Email:</strong> admin@abc.com
          <br />
          <strong>Password:</strong> Abcd1234
        </p>
      </div>
    </div>
  );
}

export default HomePage;
