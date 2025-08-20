import { BadgesType } from '@/my-app/hooks/use-badges';
import Link from 'next/link';

export const BadgeComponent = ({ name, url, src, alt }: BadgesType) => {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative'
    >
      <img src={src} alt={alt} className='w-32' />
      <div className='absolute bottom-0 left-0 hidden w-full bg-black bg-opacity-75 p-2 text-center text-sm underline group-hover:block'>
        <span>{name}</span>
      </div>
    </Link>
  );
};
