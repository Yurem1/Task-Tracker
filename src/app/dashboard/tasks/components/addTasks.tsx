'use client';

import { TaskConstants } from '@/utilities/constants';
import { IDashboardTasks, IProfile, ITasks } from '@/utilities/interfaces';
import React from 'react';

interface IAddTasks {
  profile: {
    login: IProfile
  }
}

export default function AddTasks({profile}: IAddTasks): React.JSX.Element {

  const [state, setState] = React.useState<ITasks>(
    TaskConstants.DEFAULT_TASK
  );

  const onFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;

    for(const key in state) {
      if(key === name) {
        setState((prev) => ({
          ...prev,
          [key]: value
        }));
      }
    }
  }

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const req = await fetch('/dashboard/tasks/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        profile: profile.login,
        newTask: state
      })
    });

    console.log(req);
  }

  return (
    <div className=''>
      <form className='grid grid-rows-3 bg-gray-200 h-48 w-60 items-center rounded-2xl'
        onSubmit={onFormSubmit} onChange={onFormChange}>
        <div className='flex flex-col items-center justify-center gap-2'>
          <label className='font-medium'>
            Name
          </label>
          <input name='name' className='rounded-lg' type='text' required/>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <label className='font-medium'>
            Value 
          </label>
          <input name='value' className='rounded-lg' type='text' required/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <input 
            className='bg-white rounded-lg px-4 font-medium hover:scale-95 
            active:scale-90' 
            type='submit' value='Add Task'/>
        </div>
      </form>
    </div>
  )
}