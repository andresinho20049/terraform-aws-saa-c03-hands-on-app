'use client';

import { redirectPage } from '@/my-app/hooks/use-pages';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useCallback, useMemo } from 'react';

export type NavBarLinkType = LinkProps & {
  href: string;
  label: string | ReactNode;
  callback?: () => void;
};

export const NavBarLink = ({
  href,
  label,
  callback,
  ...props
}: NavBarLinkType) => {
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    if (callback) {
      callback();
    }
  }, []);

  const newPath = useMemo(() => redirectPage(pathname, href), [href, pathname]);

  return (
    <Link
      href={newPath}
      className={`no-underline ${
        newPath === pathname ? 'text-primary dark:text-primary' : ''
      } md:border-none`}
      {...props}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};
