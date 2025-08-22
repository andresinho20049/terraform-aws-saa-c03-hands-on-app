import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export type LinkAppearanceButtonPropsType = LinkProps & {
  href: string;
  isBlank?: boolean;
  isPrimary?: boolean;
  children: ReactNode;
};

export const LinkAppearanceButton = ({
  href,
  isBlank,
  isPrimary = true,
  children,
  ...props
}: LinkAppearanceButtonPropsType) => {
  return (
    <Link
      aria-label={href}
      className={isPrimary ? 'primary-button' : 'secondary-button'}
      href={href}
      target={isBlank ? '_blank' : ''}
      rel={isBlank ? 'noopener noreferrer' : ''}
      {...props}
    >
      <span className='sr-only'>{href}</span>
      {children}
    </Link>
  );
};
