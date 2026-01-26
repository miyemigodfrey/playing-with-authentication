import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className='bg-[#1a1a2e] text-white px-6 py-4 flex items-center justify-between'>
      <Link to='/' className='text-xl font-bold'>
        🔐 Auth Learning
      </Link>

      <div className='flex items-center gap-4'>
        <Link to='/' className='px-3 py-1 rounded hover:bg-white/10'>Home</Link>

        {isAuthenticated ? (
          <>
            <Link to='/dashboard' className='px-3 py-1 rounded hover:bg-white/10'>Dashboard</Link>
            <Link to='/profile' className='px-3 py-1 rounded hover:bg-white/10'>Profile</Link>
            <span className='text-white/80'>Welcome, {user?.name}</span>
            <button
              onClick={logout}
              className='bg-pink-600 hover:bg-pink-500 text-white px-3 py-1 rounded'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' className='px-3 py-1 rounded hover:bg-white/10'>Login</Link>
            <Link to='/signup' className='px-3 py-1 rounded bg-pink-600 hover:bg-pink-500 text-white'>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
