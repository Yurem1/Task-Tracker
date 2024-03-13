'use client';

import { FormConstants } from '@/utilities/constants';
import { ILogin } from '@/utilities/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

/**
 * Renders the sign-up page component.
 * @returns The sign-up page component.
 */
export default function Page(): React.JSX.Element {
  const router = useRouter();

  const [showError, setError] = React.useState<boolean>(true);

  const [state, setState] = React.useState<ILogin>(FormConstants.DEFAULT_VALUE);

  // Handle form input change
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

  // Handle form submission
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const response = await fetch('/auth/sign-up/api', {
      method: 'POST',
      headers: {
        'Fetch-Type': 'Sign-in',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });

    if(response.status > 399) {
      setError(false);
    }

    if(response.ok) {
      router.replace('/dashboard/tasks');
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
        <form className='grid grid-rows-3 items-center justify-center bg-gray-200 h-48 w-60 rounded-xl border-2 border-black' onSubmit={onFormSubmit} onChange={onFormChange}>
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
            <button className='self-center hover:scale-95 bg-white rounded-md px-4 font-medium' type='submit'>
              Sign-Up
            </button>
          </div>
        </form>
        {/* Sign-in */}
        <div className='self-start m-2'>
          <Link href='/auth/sign-in'>
            <p className='text-center text-xs'>Already have an account?</p>
          </Link>
        </div>
      </div>
      {/* Error Section */}
      <div className='self-start'>
        {!showError && (
          <div className='text-center text-xs text-red-500'>
            <h1 className=''>
              This account already exists!
            </h1>
            <p>
              Please sign-in instead.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
