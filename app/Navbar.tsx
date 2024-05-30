'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from 'react-icons/fa6';
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { Box } from '@radix-ui/themes';

const Navbar = () => {
  const pathname = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' },
  ];

  return (
    <nav className="flex space-x-6 border-b px-5 mb-5 h-14 items-center">
      <Link href={'/'}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                'text-zinc-900': pathname === link.href,
                'text-zinc-400': pathname !== link.href,
                'hover:text-zinc-800 transition-colors': true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === 'authenticated' && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === 'unauthenticated' && (
          <Link href="/api/auth/signin">Log in</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
