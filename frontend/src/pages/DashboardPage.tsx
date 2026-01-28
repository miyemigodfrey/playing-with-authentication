import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllUsersApi } from '../services/authApi';
import { User } from '../types/auth';

function DashboardPage() {
  const { user, token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    /**
     * 🎯 TODO FOR LEARNERS:
     *
     * Implement fetching all users from the protected API endpoint.
     *
     * Steps:
     * 1. Check if token exists
     * 2. Call getAllUsersApi with the token
     * 3. Set the users state with the response
     * 4. Handle any errors
     * 5. Set loading to false
     *
     * Note: This is a protected endpoint, so you need to pass the JWT token!
     */

    const fetchUsers = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        // TODO: Implement fetching users
        const data = await getAllUsersApi(token);
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <p className='text-slate-600'>Welcome to your protected dashboard, {user?.name}! 🎉</p>
      </div>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
        <div className='p-4 rounded-lg text-white' style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <h3 className='text-sm opacity-80'>Your Email</h3>
          <p className='text-2xl font-bold'>{user?.email || 'Loading...'}</p>
        </div>
        <div className='p-4 rounded-lg text-white' style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
          <h3 className='text-sm opacity-80'>Total Users</h3>
          <p className='text-2xl font-bold'>{users.length}</p>
        </div>
        <div className='p-4 rounded-lg text-white' style={{ background: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)' }}>
          <h3 className='text-sm opacity-80'>Auth Status</h3>
          <p className='text-2xl font-bold'>✅ Logged In</p>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='font-semibold mb-4'>Registered Users</h3>

        {isLoading ? (
          <div className='flex justify-center items-center py-8'>
            <div className='w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin'></div>
          </div>
        ) : error ? (
          <div className='bg-red-50 text-red-600 p-3 rounded mb-4 text-center'>{error}</div>
        ) : users.length === 0 ? (
          <p>No users found. Make sure the API is implemented!</p>
        ) : (
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b-2 border-slate-100'>
                <th className='text-left p-3'>ID</th>
                <th className='text-left p-3'>Name</th>
                <th className='text-left p-3'>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className='border-b border-slate-100'>
                  <td className='p-3'>{u.id}</td>
                  <td className='p-3'>{u.name}</td>
                  <td className='p-3'>{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
