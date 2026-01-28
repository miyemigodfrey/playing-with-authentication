

function UnauthorizedPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center'>
        <h2 className='text-2xl text-gray-900 font-semibold mb-4'>Unauthorized Access</h2>
        <p className='text-gray-700 mb-6'>You do not have permission to view this page. Please log in with the appropriate credentials.</p>
        <a href='/login' className='text-blue-600 hover:underline'>Go to Login Page</a>
      </div>
    </div>
  );
}

export default UnauthorizedPage;