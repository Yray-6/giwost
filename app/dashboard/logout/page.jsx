'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    
    // Redirect to the login page
    router.push('/login');
  }, [router]);

  return null;
};

export default Logout;
