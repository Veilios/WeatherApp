import React from 'react';
import Image from 'next/image';
import spinner from '../public/Spinner.gif';

const Spinner = () => {
  return (
    <>
      <Image
        src={spinner}
        alt='loading...'
        layout='fill'
        objectFit='scale-down'
        priority
      />
    </>
  );
};

export default Spinner;