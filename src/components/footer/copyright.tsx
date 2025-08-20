import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkCopyrightPropsType = LinkProps & {
  children: ReactNode;
};

export const LinkCopyright = ({
  href,
  children,
  ...props
}: LinkCopyrightPropsType) => (
  <Link
    href={href}
    {...props}
    className='text-center text-sm text-black no-underline decoration-cyan-700 hover:text-cyan-700 hover:underline dark:text-white'
  >
    {children}
  </Link>
);

export const CopyrightComponent = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2020 + (currentYear > 2020 ? `-${currentYear}` : '');

  const copyrightName = 'Andresinho20049';

  return (
    <LinkCopyright href='https://github.com/andresinho20049'>
      {`Developed by `}
      {copyrightName}
      <br />
      &copy; Copyright {copyrightDate}
    </LinkCopyright>
  );
};
