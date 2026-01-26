import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className='space-y-6'>
      <div className='text-center p-10 rounded-lg bg-gradient-to-tr from-[#1a1a2e] to-[#16213e] text-white'>
        <h1 className='text-3xl font-bold'>🔐 Authentication Learning App</h1>
        <p className='mt-4 max-w-2xl mx-auto text-lg text-white/90'>
          Learn how to implement authentication in React with JWT tokens,
          protected routes, and API integration.
        </p>

        <div className='mt-6 flex justify-center gap-4'>
          {isAuthenticated ? (
            <Link to='/dashboard' className='px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-500'>
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to='/login' className='px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-500'>
                Login
              </Link>
              <Link to='/signup' className='px-6 py-3 border border-white text-white rounded hover:bg-white/10'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold text-slate-800 mb-4'>What You'll Learn</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='text-3xl mb-2'>🔑</div>
            <h3 className='font-semibold mb-1'>JWT Authentication</h3>
            <p className='text-sm text-slate-600'>Learn how JSON Web Tokens work and how to use them for authentication.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='text-3xl mb-2'>🛡️</div>
            <h3 className='font-semibold mb-1'>Protected Routes</h3>
            <p className='text-sm text-slate-600'>Implement route protection to secure pages that require authentication.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='text-3xl mb-2'>🔄</div>
            <h3 className='font-semibold mb-1'>Auth Context</h3>
            <p className='text-sm text-slate-600'>Use React Context to manage authentication state across your app.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <div className='text-3xl mb-2'>📡</div>
            <h3 className='font-semibold mb-1'>API Integration</h3>
            <p className='text-sm text-slate-600'>Connect to a backend API and handle authentication requests.</p>
          </div>
        </div>
      </div>

      <div className='bg-yellow-50 border border-yellow-200 rounded p-4'>
        <h4 className='font-medium mb-1'>📚 Learning Instructions</h4>
        <p className='text-sm text-yellow-800'>This app has several TODO sections for you to complete. Check the following files:</p>
        <ul className='mt-2 pl-5 list-disc text-sm text-yellow-900'>
          <li><code>src/context/AuthContext.tsx</code> - Auth state management</li>
          <li><code>src/services/authApi.ts</code> - API calls</li>
          <li><code>src/pages/LoginPage.tsx</code> - Login form handling</li>
          <li><code>src/pages/SignupPage.tsx</code> - Signup form handling</li>
        </ul>
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='font-semibold mb-2'>🧪 Test Credentials</h3>
        <p>Use these credentials to test the login functionality:</p>
        <p className='mt-2'>
          <strong>Email:</strong> admin@abc.com
          <br />
          <strong>Password:</strong> Abcd1234
        </p>
      </div>
    </div>
  );
}

export default HomePage;
