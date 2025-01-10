import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>

        <span className='text-xs text-gray-600' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Contact</span>
        <span className='text-xs text-gray-600'>
        <Link href={`tel:${CONTACTS.PHONE}`}>{CONTACTS.PHONE}</Link>
          </span>
      </div>
      </div>
  );
};

export default Contact;
 