import Link from 'next/link';

const Download = ({ icon }) => {
  return (
    <Link
      href='/Pratham_Panchal_Resume.pdf'
      target='_blank'
      download
      className='resumebutton flex items-center gap-x-2 pb-100  pt-2 '
    >
      <span>Download Resume</span>
      <span>{icon}</span>
    </Link>
  );
};

export default Download;
