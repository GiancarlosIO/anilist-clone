import Link from 'next/link';
import Image from 'next/image';

import { PrimaryButton } from '@/shared/ui';

const TextLink: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="px-4 py-3 text-gray-300 font-semibold text-1.4">
      {children}
    </span>
  );
};

export const Navbar = () => {
  return (
    <div className="w-full bg-[#2b2d42] absolute top-0 left-0 right-0 h-[75px]">
      <div className="container-al container mx-auto h-full">
        <nav className="h-full flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src="/img/anilist-icon.svg"
              alt="anilist"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex items-center">
            <Link href="/search/anime/">
              <TextLink>Search</TextLink>
            </Link>
            <Link href="/social/">
              <TextLink>Social</TextLink>
            </Link>
            <Link href="/forum/overview/">
              <TextLink>Forum</TextLink>
            </Link>
            <Link href="/login/" className="block ml-[70px]">
              <TextLink>Login</TextLink>
            </Link>
            <PrimaryButton href="/signup">Signup</PrimaryButton>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
