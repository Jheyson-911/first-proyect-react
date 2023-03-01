import banner from '../../assets/banner.jpg';

export const Banner = () => {
  return (
    <div>
      <div className='h-48 bg-red-500'>
        <img
          src={banner}
          alt='banner'
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
};
