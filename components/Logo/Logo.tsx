// components/Logo.js
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
        <Image 
          src="/logo-light.svg" // Place your logo image in the public folder
          alt="Company Logo"
          width={200} // Adjust the size as needed
          height={40} // Adjust the size as needed
          className="cursor-pointer"
        />
    </Link>
  );
};

export default Logo;

