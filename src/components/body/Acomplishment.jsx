import p1 from '../../assets/pic01.jpg';
import p2 from '../../assets/pic02.jpg';
import p3 from '../../assets/pic03.jpg';

export const Acomplishment = () => {
  return (
    <div
      className='section-item mt-2'
      id='Accomplishments'
    >
      <h2 className='title-style'>A Few Accomplishments</h2>
      <p className='parraf-style my-5'>
        Integer eu ante ornare amet commetus vestibulum blandit integer in curae
        ac faucibus integer non. Adipiscing cubilia elementum integer. Integer
        eu ante ornare amet commetus.
      </p>
      <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
        <div className='grid grid-cols-1 cel:grid-cols-2 cel:gap-5 md:grid-cols-1 md:my-5  '>
          <div>
            <img
              src={p1}
              alt=''
              className='rounded-md'
            />
          </div>
          <div className=' lg:flex lg:flex-col lg:justify-center'>
            <h3 className='subtitle-style'>Possibly broke spacetime</h3>
            <p className='parraf-style my-5 '>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </div>
        <hr
          className='bg-gray-300 h-[2px] rounded-full my-5 lg:hidden
      '
        />
        <div className='grid grid-cols-1 cel:grid-cols-2 cel:gap-5 md:grid-cols-1 md:my-5 '>
          <div>
            <img
              src={p2}
              alt=''
              className='rounded-md'
            />
          </div>
          <div className=' lg:flex lg:flex-col lg:justify-center'>
            <h3 className='subtitle-style'>Terraformed a small moon</h3>
            <p className='parraf-style my-5 '>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </div>
        <hr
          className='bg-gray-300 h-[2px] rounded-full my-5 lg:hidden
      '
        />
        <div className='grid grid-cols-1 cel:grid-cols-2 cel:gap-5 md:grid-cols-1 md:my-5 '>
          <div>
            <img
              src={p3}
              alt=''
              className='rounded-md'
            />
          </div>
          <div>
            <h3 className='subtitle-style'>Snapped dark matter in the wild</h3>
            <p className='parraf-style'>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </div>
        <hr
          className='bg-gray-300 h-[2px] rounded-full my-5 lg:hidden
      '
        />
        <div className='grid grid-cols-1 cel:grid-cols-2 cel:gap-5 md:grid-cols-1 md:my-5  '>
          <div>
            <img
              src={p1}
              alt=''
              className='rounded-md'
            />
          </div>
          <div className=' lg:flex lg:flex-col lg:justify-center'>
            <h3 className='subtitle-style'>Possibly broke spacetime</h3>
            <p className='parraf-style my-5 '>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
