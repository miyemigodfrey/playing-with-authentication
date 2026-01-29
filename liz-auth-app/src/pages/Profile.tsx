 export default function ProfilePage(){
    return(
        <div className='space-y-8'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>Profile</h1>
            <p className='text-slate-600 mt-2'>Manage your account information</p>
          </div>
          
          <div className='bg-white rounded-lg shadow-md p-6 max-w-2xl'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Account Information</h2>
            
            <div className='space-y-4'>
              <div className='flex justify-between items-start pb-4 border-b border-gray-200'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>Username</p>
                  <p className='text-gray-900 mt-1'>Lizzy</p>
                </div>
              </div>
              
              <div className='flex justify-between items-start pb-4 border-b border-gray-200'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>Email</p>
                  <p className='text-gray-900 mt-1'>lizzy@example.com</p>
                </div>
              </div>
              
              <div className='flex justify-between items-start'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>Account Status</p>
                  <p className='text-green-600 font-medium mt-1'>✅ Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
 }