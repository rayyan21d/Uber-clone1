'use client'

import React from 'react'
import z from 'zod'
import { useState } from 'react'
// import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'
import { login } from './actions'


const eschema = z.object({
  email: z.string().email(),
});
const pschema = z.object({
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});


export default function Loginform() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const formdatatosend = new FormData();

  const [wrongEmail, setWrongEmail] = useState(false);
  const [invalidpassword, setInvalidPassword] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    const validationResult = eschema.safeParse({ email: emailValue });

    if (validationResult.success || emailValue === '') {
      setFormData({ ...formData, email: emailValue });
      setWrongEmail(false);
    } else {
      setWrongEmail(true);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    const validationResult = pschema.safeParse({ password: passwordValue });

    if (validationResult.success || passwordValue === '') {
      setFormData({ ...formData, password: passwordValue });
      
      
      setInvalidPassword(false);
    } else {
      setInvalidPassword(true);
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!eschema.safeParse({ email: formData.email }).success || !pschema.safeParse({ password: formData.password }).success){
      toast.error('Invalid email or password');
      return;
    }
    formdatatosend.append('email', formData.email);
    formdatatosend.append('password', formData.password);
    
    console.log(formData);
    setFormData({
      email: '',
      password: ''
    });
    login(formdatatosend);
    toast.success('Login Successful');

  }
  return (

    <div className='bg-white p-8 rounded shadow-md w-96'>
      <h1 className='text-2xl font-bold text-center'>Login</h1>
      <form className='mt-4' onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          onChange={onChangeEmail}
        />
        {wrongEmail && <p className='text-red-700 italic'>Invalid email format</p>}
        <input
          type='password'
          placeholder='Password'
          className='w-full p-2 border border-gray-300 rounded mt-2'
          onChange={onChangePassword}
        />
        {invalidpassword && <p className='text-red-700 italic'>Invalid password format</p>}

        <button className={`w-full bg-blue-500 text-white p-2 rounded mt-4`} type='submit'>Login</button>
      </form>
    </div>

  )
}
