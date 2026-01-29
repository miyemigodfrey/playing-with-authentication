 import { Link } from 'react-router-dom';


 export default function LoginPage(){
    return(
    <div className='min-h-screen flex flex-col items-center justify-center p-6'>
      <div className='w-full max-w-md'>
        <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6'>
          <h4 className='font-medium mb-1'>Hello Fan</h4>
          <p className='text-sm text-yellow-800'>
            Welcome to our Exclusive Dashboard login if you have an account, if not  click the sign up button below to register!
          </p>
        </div>
        
        <div className='bg-white rounded-lg shadow-md p-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6 text-center'>Login</h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='admin@abc.com'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
              />
            </div>

            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
              />
            </div>

            <button type='submit' className='w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:bg-gray-300 font-medium transition'>
              Login
            </button>
          </form>

          <p className='text-center mt-4 text-sm text-gray-600'>
            Don't have an account? <Link to='/signup' className='text-pink-600 hover:text-pink-700 font-medium'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
    )
 }