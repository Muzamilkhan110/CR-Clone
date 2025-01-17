// components/Logo.js
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='md:max-w-[50%] '>
    <Link href="/">
        <Image 
          src="/logo-light.svg" // Place your logo image in the public folder
          alt="Company Logo"
          width={200} // Adjust the size as needed
          height={40} // Adjust the size as needed
          className="cursor-pointer sm:w-[180px] w-[150px] md:w-[200px]"
        />
    </Link>
    </div>
  );
};

export default Logo;

