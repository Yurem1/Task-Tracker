'use client';

import { ProfileConstants } from '@/utilities/constants';
import { IProfile } from '@/utilities/interfaces';
import React from 'react';

export default function Page(): React.JSX.Element {
  const [profile, setProfile] = React.useState<IProfile>();

  React.useEffect(() => {
    const fetchProfile = async () => {
      const request = await fetch('/dashboard/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(null)
      });

      if(request.ok) {
        const response: IProfile = await request.json();
        setProfile(() => response);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div className='flex flex-col items-center h-full'>
      
    </div>
  )
}