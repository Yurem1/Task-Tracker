import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className='grid grid-rows-2 items-start justify-items-center h-full'>
      <div className='grid grid-rows-1'>
        <div className='border-b-2 border-black px-6 py-4'>
          <h1 className='text-center font-semibold'>
            Task Tracker
          </h1>
          <p className='text-center font-medium'>
            Create, update, and delete tasks.
          </p>
        </div>
      </div>
      <div className='grid grid-rows-2 h-40 w-64 bg-gray-200 py-4 px-4 rounded-xl text-center'>
        <div className='grid grid-rows-2'>
          <div>
            <h1 className='font-semibold'>
              Already have an account?
            </h1>
          </div>
          <div>
            <Link href='/auth/sign-in'>
              <p className='font-medium'>
                Sign-In
              </p>
            </Link>
          </div>
        </div>
        <div className='grid grid-rows-2'>
          <div>
            <h1 className='font-semibold'>
              Don't have an account?
            </h1>
          </div>
          <div>
            <Link href='/auth/sign-up'>
              <p className='font-medium'>
                Sign-Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}