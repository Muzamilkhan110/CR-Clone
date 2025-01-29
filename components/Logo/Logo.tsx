// components/Logo.js
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className=''>
    <Link href="/">
        <Image 
          src="/logo-light.svg" // Place your logo image in the public folder
          alt="Company Logo"
          width={200} // Adjust the size as needed
          height={40} // Adjust the size as needed
          className="cursor-pointer w-[170px] sm:w-[150px] md:w-[180px]"
        />
    </Link>
    </div>
  );
};

export default Logo;

