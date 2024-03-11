import Link from 'next/link';
import React from 'react';

/**
 * Renders the sign-in page component.
 * @returns The sign-in page component.
 */
export default function Page(): React.JSX.Element {
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
      <div className='flex flex-col items-center justify-center'>
        {/* Login form */}
        <form className='grid grid-rows-3 items-center justify-center bg-gray-200 h-48 w-60 rounded-xl'>
          <div className='flex flex-col items-center gap-2 text-center'>
            {/* Username */}
            <label className='font-medium'>
              Username
            </label>
            <input className='rounded-md' type='text' required />
          </div>
          <div className='flex flex-col items-center gap-2 text-center'>
            {/* Password */}
            <label className='font-medium'>
              Password
            </label>
            <input className='rounded-md' type='password' required />
          </div>
          <div className='flex flex-col items-center'>
            {/* Submit */}
            <button className='bg-white px-4 rounded-md hover:scale-95' type='submit'>
              <h1 className='font-medium'>
                Sign-In
              </h1>
            </button>
          </div>
        </form>
        <div className='text-center m-1'>
          {/* Sign-up */}
          <Link className='active:scale-95' href='/auth/sign-up'>
            <h1 className='text-xs'>
              Don't have an account?
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}