import Link from 'next/link';
import { DividerSimple } from '../dividers/divider-simple';

export type CardPreviewPropsType = {
  title: string;
  description: string;
  imgSrc: string;
  linkText: string;
  linkUrl: string;
};

export const CardPreview = ({
  title,
  description,
  imgSrc,
  linkText,
  linkUrl,
}: CardPreviewPropsType) => (
  <div className='flex max-w-md flex-col rounded-xl bg-card-bg shadow-md shadow-disableLight dark:bg-card-bg-dark dark:shadow-disableDark'>
    <img
      src={imgSrc}
      alt={title}
      className='h-72 w-full rounded-t-xl object-cover'
    />
    <div className='resume flex h-full flex-1 flex-col justify-between p-6'>
      <div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div>
        <DividerSimple />
        <div className='flex justify-end'>
          <Link
            className=''
            href={linkUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='sr-only'>{title}</span>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  </div>
);
