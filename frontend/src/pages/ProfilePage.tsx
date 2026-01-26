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
      <div className='flex justify-center items-center py-8'>
        <div className='w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin'></div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-semibold'>My Profile</h1>
        <p className='text-slate-600'>View and manage your account information.</p>
      </div>

      <div className='bg-yellow-50 border border-yellow-200 rounded p-4'>
        <h4 className='font-medium'>🎯 Learning Task</h4>
        <p className='text-sm text-yellow-800'>This page fetches your profile from a protected endpoint. Implement <code>getProfileApi</code> in <code>authApi.ts</code> to see your profile!</p>
      </div>

      {error && <div className='bg-red-50 text-red-600 p-3 rounded mb-4 text-center'>{error}</div>}

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='font-semibold mb-4'>Account Information</h3>

        {profile ? (
          <div className='grid gap-4'>
            <div className='flex border-b pb-3'>
              <div className='w-24 font-medium text-slate-600'>ID:</div>
              <div>{profile.id}</div>
            </div>
            <div className='flex border-b pb-3'>
              <div className='w-24 font-medium text-slate-600'>Name:</div>
              <div>{profile.name}</div>
            </div>
            <div className='flex border-b pb-3'>
              <div className='w-24 font-medium text-slate-600'>Email:</div>
              <div>{profile.email}</div>
            </div>
          </div>
        ) : (
          <p>Profile data not available. Make sure the API is implemented!</p>
        )}
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='font-semibold mb-2'>🔒 Security Information</h3>
        <p className='text-slate-600 mb-4'>Your session is secured with a JWT token. The token is sent with every request to protected endpoints.</p>
        <div className='flex'>
          <div className='w-24 font-medium text-slate-600'>Token:</div>
          <div className='font-mono text-sm text-slate-700 break-all'>{token ? `${token.substring(0, 50)}...` : 'No token'}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
