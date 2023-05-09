import gallery1 from '../Images/gallery1.jpg';
import gallery2 from '../Images/gallery2.jpg';
import gallery3 from '../Images/gallery3.jpg';
import gallery4 from '../Images/gallery4.jpg';
import gallery5 from '../Images/gallery5.jpg';
import gallery6 from '../Images/gallery6.jpg';
import gallery7 from '../Images/gallery7.jpg';
import gallery8 from '../Images/gallery8.jpg';
import gallery11 from '../Images/gallery11.jpg';
import gallery13 from '../Images/gallery13.jpg';
import gallery9 from '../Images/gallery9.jpg';

const Gallery = () => {
  return (
    <section className='mb-20 mx-auto max-w-5xl mt-10 text-lg px-2 '>
      <h2 className='font-bold text-3xl text-teal-600 mb-10'>Gallery</h2>
      <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden '>
        <ul className='w-[2800px] whitespace-nowrap'>
          <li className='relative  inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[380px] w-[450px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery1} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[440px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery2} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery3} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery8} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery5} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery6} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery7} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery4} alt='' />
          </li>

          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery11} alt='' />
          </li>

          <li className='relative mx-5 inline-block h-[350px] w-[400px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[400px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery13} alt='' />
          </li>
          <li className='relative mx-5 inline-block h-[350px] w-[350px] '>
            <div className='p-5 absolute z-30 flex flex-col h-[350px] w-[300px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '></div>
            <img src={gallery9} alt='' />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
