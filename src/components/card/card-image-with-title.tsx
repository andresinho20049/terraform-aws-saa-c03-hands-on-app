export type CardImageWithTitlePropsType = {
  cardTitle: string;
  imageSrc: string;
};

export const CardImageWithTitle = ({
  cardTitle,
  imageSrc,
}: CardImageWithTitlePropsType) => (
  <div className='relative h-80 w-full rounded-md bg-card-bg-dark shadow-md dark:bg-card-bg'>
    <div className='flex h-full w-12 items-center justify-center px-2'>
      <h2 className='rotate-180 text-center text-2xl font-bold uppercase text-stone-100 [writing-mode:vertical-lr] dark:text-stone-800'>
        {cardTitle}
      </h2>
    </div>
    <div className='absolute inset-x-10 top-5 flex h-full w-full items-center justify-center rounded-md bg-card-bg shadow-md transition-all duration-300 ease-out hover:translate-x-3 hover:-rotate-1 hover:scale-110 dark:bg-card-bg-dark'>
      <img
        className='h-full w-11/12 object-contain'
        src={imageSrc}
        alt={cardTitle}
      />
    </div>
  </div>
);
