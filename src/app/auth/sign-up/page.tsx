'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const [state, setState] = React.useState({
    username: '',
    password: '',
  });

  const onFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    for (const key in state) {
      if (key === name) {
        setState({
          ...state,
          [key]: value,
        });
      }
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/auth/api', {
      method: 'POST',
      headers: {
        'Fetch-Type': 'Sign-in',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });

    if (response.ok) {
      router.replace('/');
    }
  };

  return (
    <div className='grid grid-rows-3 items-center justify-center h-full'>
      {/* Header */}
      <div className='self-start border-b-2 border-black text-center py-6 px-4'>
        <div className=''>
          <h1 className='font-semibold'>Create an account</h1>
        </div>
        <div>
          <p className='font-medium'>Please sign-up to create an account.</p>
        </div>
      </div>
      {/* Sign-up Form */}
      <div className='self-center grid items-center justify-center'>
        <form className='grid items-center justify-center bg-gray-200 h-48 w-60 rounded-lg border-2 border-black' onSubmit={onFormSubmit} onChange={onFormChange}>
          {/* Username */}
          <div className='flex flex-col gap-2 items-center'>
            <label className='font-medium'>Enter a username:</label>
            <input className='rounded-md' name='username' type='text' />
          </div>
          {/* Password */}
          <div className='flex flex-col gap-2 items-center'>
            <label className='font-medium'>Enter a password:</label>
            <input className='rounded-md' name='password' type='password' />
          </div>
          {/* Submit */}
          <div className='self-center flex flex-col items-center'>
            <button className='self-center hover:scale-95 bg-white rounded-md p-1' type='submit'>
              Sign-Up
            </button>
          </div>
        </form>
        {/* Sign-in */}
        <div className='self-start m-1'>
          <Link href='/auth/sign-in'>
            <p className='text-center text-xs'>Already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
