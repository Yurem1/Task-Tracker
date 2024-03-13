'use client';

import { FormConstants } from '@/utilities/constants';
import { ILogin } from '@/utilities/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

/**
 * Renders the sign-in page component.
 * @returns The sign-in page component.
 */
export default function Page(): React.JSX.Element {

  const router = useRouter();

  const [showError, setError] = React.useState<boolean>(true);

  const [state, setState] = React.useState<ILogin>(FormConstants.DEFAULT_VALUE);

  // Handle form change event
  const onFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    // Update state based on input name
    for (const key in state) {
      if (key === name) {
      setState({
        ...state,
        [key]: value,
      });
      }
    }
  }

  // Handle form submit event
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send POST request to server
    const response = await fetch('/auth/sign-in/api', {
      method: 'POST',
      headers: {
        'Fetch-Type': 'Sign-in',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    });

    if(response.status > 399) {
      setError(false);
    }

    if(response.ok) {
      router.replace('/dashboard/tasks');
    }
  }

  return (
    <div className='grid grid-rows-3 items-center justify-center h-full'>
      {/* Header */}
      <div className='self-start px-4 py-6 border-b-2 border-black text-center'>
        <div>
          <h1 className='font-semibold'>
            Welcome back
          </h1>
        </div>
        <div>
          <p className='font-medium'>
            Please sign-in to your account.
          </p>
        </div>
      </div>
      {/* Login form */}
      <div className='flex flex-col items-center justify-center'>
        <form className='grid grid-rows-3 items-center justify-center
          bg-gray-200 h-48 w-60 border-2 border-black rounded-xl'
          onSubmit={onFormSubmit} onChange={onFormChange}>
          {/* Username */}
          <div className='flex flex-col items-center gap-2 text-center'>
            <label className='font-medium'>
              Username:
            </label>
            <input name='username' className='rounded-md' type='text' required />
          </div>
          {/* Password */}
          <div className='flex flex-col items-center gap-2 text-center'>
            <label className='font-medium'>
              Password:
            </label>
            <input name='password' className='rounded-md' type='password' required />
          </div>
          {/* Submit */}
          <div className='flex flex-col items-center'>
            <button className='bg-white px-4 rounded-md hover:scale-95' type='submit'>
              <h1 className='font-medium'>
                Sign-In
              </h1>
            </button>
          </div>
        </form>
        {/* Sign-up */}
        <div className='self-center text-center m-2'>
          <Link className='active:scale-95' href='/auth/sign-up'>
            <h1 className='text-xs'>
              Don't have an account?
            </h1>
          </Link>
        </div>
      </div>
      {/* Error Section */}
      <div className='self-start ease-in-out'>
        {!showError && (
          <div className='text-center text-xs text-red-500'>
            <h1 className=''>
              Account not found.
            </h1>
            <p>
              Check your username or password.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}