'use server'

import { revalidatePath } from 'next/cache'


import { createClient } from '@/utils/supabase/server'
import { toast } from 'react-toastify'




export async function signup(formData: FormData) {
  const supabase = createClient()


  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const table_data = {
    name: formData.get('fullName') as string, 
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    dob: new Date(formData.get('dob') as string), 
  };
  console.log("tabledata:",table_data);

  const { error } = await supabase.auth.signUp(data)

  if (error ) {
    if(error.message.includes('User already registered')){
      
      console.log('Invalid email or password')
      return {message:'User already registered'}
    }
    else{
      console.log('error', error.message)

    }
  }
  else {
    // toast.success('Sign Up Successful');
    const { error } = await supabase
      .from('Users')
      .insert({ name:table_data.name , email:table_data.email, password:table_data.password, DOB:table_data.dob})
    if(error){
      console.log('error inserting', error)
    }
    else{
      console.log('inserted');
    }
    console.log('signup Successful');
    return {message:'signup successful'}
  }

  revalidatePath('/', 'layout')
  return {message:'signup successful'}

}
