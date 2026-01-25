import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        🔐 Auth Learning
      </Link>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>

        {isAuthenticated ? (
          <>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/profile'>Profile</Link>
            <span style={{ color: '#fff', opacity: 0.7 }}>
              Welcome, {user?.name}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
