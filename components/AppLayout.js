import React from 'react'

const AppLayout = ({children}) => {
  return (
    <>
      <div className='flex justify-between bg-blue-700 px-4 py-2 text-white text-lg'>
        <span className='font-bold'>CRUD NEXT MYSQL</span>
        <div className='flex gap-3 font-semibold'>
          <span className='cursor-pointer'>Home</span>
          <span className='cursor-pointer'>About</span>
        </div>
      </div>
      <div className='max-w-5xl mx-auto mt-10 px-2'>
        {children}
      </div>
    </>
  )
}

export default AppLayout
