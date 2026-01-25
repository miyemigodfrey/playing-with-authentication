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
        console.log('TODO: Fetch all users using getAllUsersApi');
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
    <div className='page'>
      <h1 className='page-title'>Dashboard</h1>
      <p className='page-description'>
        Welcome to your protected dashboard, {user?.name}! 🎉
      </p>

      <div className='todo-notice'>
        <h4>🎯 Learning Task</h4>
        <p>
          This page fetches data from a protected API endpoint. Implement{' '}
          <code>getAllUsersApi</code> in <code>authApi.ts</code> to see the user
          list!
        </p>
      </div>

      <div className='dashboard-grid'>
        <div className='dashboard-stat'>
          <h3>Your Email</h3>
          <p>{user?.email || 'Loading...'}</p>
        </div>
        <div
          className='dashboard-stat'
          style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          }}
        >
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div
          className='dashboard-stat'
          style={{
            background: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
          }}
        >
          <h3>Auth Status</h3>
          <p>✅ Logged In</p>
        </div>
      </div>

      <div className='card' style={{ marginTop: '2rem' }}>
        <h3 className='card-title'>Registered Users</h3>

        {isLoading ? (
          <div className='loading'>
            <div className='spinner'></div>
          </div>
        ) : error ? (
          <div className='form-error'>{error}</div>
        ) : users.length === 0 ? (
          <p>No users found. Make sure the API is implemented!</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem' }}>{u.id}</td>
                  <td style={{ padding: '0.75rem' }}>{u.name}</td>
                  <td style={{ padding: '0.75rem' }}>{u.email}</td>
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
