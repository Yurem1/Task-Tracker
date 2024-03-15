'use client';

import { ProfileConstants } from '@/utilities/constants';
import { IProfile } from '@/utilities/interfaces';
import React from 'react';
import AddTasks from './components/addTasks';

export default function Page(): React.JSX.Element {
  const [profile, setProfile] = React.useState<IProfile>();
  const [addTask, setTask] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchProfile = async () => {
      const req = await fetch('/dashboard/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(null)
      });

      if(req.ok) {
        const res: IProfile = await req.json();
        setProfile(() => res);
      }
    }

    fetchProfile();
  }, []);

  const buttonClick = () => {
    setTask(task => !task)
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <div className='m-5'>
        <button type='button' onClick={buttonClick}
          className='bg-gray-200 rounded-lg px-4 border-2 border-black 
           hover:scale-95 active:scale-90'>
            Add a task
        </button>
      </div>
      {addTask && (
        <AddTasks profile={{
          login: profile as IProfile
        }}/>
      )}
    </div>
  )
}