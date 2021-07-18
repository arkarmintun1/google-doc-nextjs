import React from 'react';
import { signIn } from 'next-auth/client';
import Button from '@material-tailwind/react/Button';
import Image from 'next/image';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-7'>
      <Image
        src='https://links.papareact.com/1ui'
        height='300'
        width='550'
        objectFit='contain'
      />
      <Button
        className='w-44 mt-10'
        color='blue'
        buttonType='filled'
        ripple='light'
        onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  );
};

export default Login;
