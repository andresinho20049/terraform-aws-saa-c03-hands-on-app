export type CardTitleDescriptionPropsType = {
  title: string;
  description: string;
};

export const CardTitleDescription = ({
  title,
  description,
}: CardTitleDescriptionPropsType) => (
  <div className='rounded-lg bg-card-bg p-6 shadow-md dark:bg-card-bg-dark'>
    <h3 className='mb-2 text-2xl font-bold text-second dark:text-second'>
      {title}
    </h3>
    <p className='dark:text-primary-dark text-base text-primary'>
      {description}
    </p>
  </div>
);
