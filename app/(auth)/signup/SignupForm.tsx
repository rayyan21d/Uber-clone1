'use client'

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from './actions' // Assuming this imports your signup function

import { useRouter } from 'next/router';
import { set } from "zod";

interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = () => {
  // const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    const formdatatosend = new FormData();
    formdatatosend.append('password', formData.password);
    formdatatosend.append('email', formData.email);
    formdatatosend.append('fullName', formData.fullName);
    formdatatosend.append('dob', formData.dob);

    try {
      let x=await signup(formdatatosend);
      if(x.message==='User already registered'){
        toast.error('User already registered');

      }else{
        toast.success('Sign Up Successful');
      }
      setFormData({
        fullName: '',
        email: '',
        password: '',
        dob: '',
      });
      // router.push('/'); // Redirect to homepage after successful signup
    } catch (error) {
      console.error('Sign Up Error:', error);
      toast.error('Sign Up Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg ${
        loading ? "opacity-100" : ""
      }`}
    >
      <ToastContainer className="absolute" position='top-right'/>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            autoFocus
            className="form-input mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
    </motion.div>
  );
};

export default SignupForm;
