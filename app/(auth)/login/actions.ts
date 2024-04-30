'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(" has occured", error);
  }

  revalidatePath('/', 'layout')
  redirect('/go')
}

