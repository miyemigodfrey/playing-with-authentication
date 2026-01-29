  import { Link } from 'react-router-dom';
 
  export default function SignupPage(){
    return(
    <div className='min-h-screen w-full flex items-center justify-center p-6'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
        <h2 className='text-2xl text-gray-900 font-semibold mb-6 text-center'>Create Account</h2>

        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-700'>Full Name</label>
            <input
              type='text'
              id='name'
              placeholder='John Doe'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
            />
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='john@example.com'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
            />
          </div>

          <div>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              id='password'           
              placeholder='Minimum 6 characters'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
            />
          </div>

          <div>
            <label htmlFor='confirmPassword' className='block mb-2 text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm your password'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition'
            />
          </div>

          <button type='submit' className='w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:bg-gray-300 font-medium transition'>
            Sign Up
          </button>
        </form>

        <p className='text-center mt-4 text-sm text-gray-600'>
          Already have an account? <Link to='/login' className='text-pink-600 hover:text-pink-700 font-medium'>Login</Link>
        </p>
      </div>
    </div>
    )
 }