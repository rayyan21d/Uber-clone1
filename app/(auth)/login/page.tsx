'use client'
import React, { useState } from 'react';
import { z } from 'zod';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login} from './actions'
import Loginform from './loginform';
import { createClient } from '@/utils/supabase/client';




export default function Page() {
    

    return (<>
        <div className='flex w-screen h-screen items-center justify-center'>
        <ToastContainer className="absolute" position='top-right'/>
            <Loginform/>
        </div>
    </>
    );
}
