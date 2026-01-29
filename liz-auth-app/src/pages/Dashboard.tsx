export default function DashboardPage(){
  return(
    <div className="space-y-8">
      <div>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <p className='text-slate-600 mt-2'>Welcome to your protected dashboard, Lizzy! 🎉</p>
      </div>    

      <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
        <div className='bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-md text-white'>
          <h3 className='text-sm opacity-80 font-medium'>Your Email</h3>
          <p className='text-2xl font-bold mt-2'>Email</p>
        </div>
        <div className='bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-md text-white'>
          <h3 className='text-sm opacity-80 font-medium'>Total Users</h3>
          <p className='text-2xl font-bold mt-2'>2</p>
        </div>
        <div className='bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-md text-white'>
          <h3 className='text-sm opacity-80 font-medium'>Auth Status</h3>
          <p className='text-2xl font-bold mt-2'>✅ Logged In</p>
        </div>
      </div> 

      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-semibold text-gray-900 mb-4'>Registered Users</h3>
        <div className='text-gray-600 text-center py-8'>
          <p>No registered users data available</p>
        </div>
      </div>
    </div>
  )
}