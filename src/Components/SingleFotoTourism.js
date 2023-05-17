const Photo = (prop = []) => {
  const {
    urls: { regular },
    alt_description,
  } = prop;
  return (
    <article className='h-64 relative overflow-hidden'>
      <img
        className='w-full h-full block object-cover'
        src={regular}
        alt={alt_description}
      />
    </article>
  );
};

export default Photo;
