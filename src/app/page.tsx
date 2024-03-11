import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className='grid h-full'>
      <div className='flex flex-col items-center border-b-2 border-black'>
        <h1 className='font-semibold'>
          Task Tracker
        </h1>
        <p className='font-medium'>
          Create, update, and delete tasks.
        </p>
      </div>
      <div className='grid size-2/5 bg-gray-200'>
        <div>
          <Link href='/auth/sign-in'>
            <p>
              Sign-In
            </p>
          </Link>
        </div>
      </div>
      <div>
        <h1>
          hello
        </h1>
      </div>
    </div>
  );
}