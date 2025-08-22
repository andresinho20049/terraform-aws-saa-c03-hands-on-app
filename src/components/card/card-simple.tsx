type CardSimplePropsType = {
  title: string;
  description: string;
  icon: string;
};

export const CardSimple = ({
  title,
  description,
  icon,
}: CardSimplePropsType) => (
  <div className='min-h-48 max-w-lg rounded-xl bg-card-bg p-4 shadow-md shadow-disableLight dark:bg-card-bg-dark dark:shadow-disableDark'>
    <h3>
      <span>
        <img src={icon} alt={title} className='mr-2 inline-block w-11' />
      </span>
      {title}
    </h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);
