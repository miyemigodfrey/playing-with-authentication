import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProfileApi } from '../services/authApi';
import { User } from '../types/auth';

function ProfilePage() {
  const { token } = useAuth();
  const [profile, setProfile] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement fetching the user profile from the protected API endpoint.
     *
     * Steps:
     * 1. Check if token exists
     * 2. Call getProfileApi with the token
     * 3. Set the profile state with the response
     * 4. Handle any errors
     * 5. Set loading to false
     *
     * Note: This demonstrates fetching user data from a protected endpoint
     * using the JWT token for authorization.
     */

    const fetchProfile = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        // TODO: Implement fetching profile
        console.log('TODO: Fetch profile using getProfileApi');
        const data = await getProfileApi(token);
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (isLoading) {
    return (
      <div className='page'>
        <div className='loading'>
          <div className='spinner'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='page'>
      <h1 className='page-title'>My Profile</h1>
      <p className='page-description'>
        View and manage your account information.
      </p>

      <div className='todo-notice'>
        <h4>🎯 Learning Task</h4>
        <p>
          This page fetches your profile from a protected endpoint. Implement{' '}
          <code>getProfileApi</code> in <code>authApi.ts</code> to see your
          profile!
        </p>
      </div>

      {error && <div className='form-error'>{error}</div>}

      <div className='card'>
        <h3 className='card-title'>Account Information</h3>

        {profile ? (
          <div className='profile-info'>
            <div className='profile-field'>
              <label>ID:</label>
              <span>{profile.id}</span>
            </div>
            <div className='profile-field'>
              <label>Name:</label>
              <span>{profile.name}</span>
            </div>
            <div className='profile-field'>
              <label>Email:</label>
              <span>{profile.email}</span>
            </div>
          </div>
        ) : (
          <p>Profile data not available. Make sure the API is implemented!</p>
        )}
      </div>

      <div className='card' style={{ marginTop: '1rem' }}>
        <h3 className='card-title'>🔒 Security Information</h3>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Your session is secured with a JWT token. The token is sent with every
          request to protected endpoints.
        </p>
        <div className='profile-field'>
          <label>Token:</label>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              wordBreak: 'break-all',
              color: '#666',
            }}
          >
            {token ? `${token.substring(0, 50)}...` : 'No token'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
