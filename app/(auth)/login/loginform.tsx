import React from 'react'
// import { useFormState } from 'react-dom'

export default function Loginform() {
  return (

        <div className='bg-white p-8 rounded shadow-md w-96'>
            <h1 className='text-2xl font-bold text-center'>Login</h1>
            <form className='mt-4'>
                <input type='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded mt-2' />
                <input type='password' placeholder='Password' className='w-full p-2 border border-gray-300 rounded mt-2' />
                <button className='w-full bg-blue-500 text-white p-2 rounded mt-4'>Login</button>
            </form>
         </div>   
    
  )
}
