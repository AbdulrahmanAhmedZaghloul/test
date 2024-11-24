import web from '../../../image/wed.jpg'

function ContectTwo() {

  return (
    <div className='flex mx-auto justify-between items-center flex-wrap my-8'>
      <div className='lg:w-1/2 md:w-[50%] mx-auto'>
        <div className='p-11 '>
          <h2 className='text-center text-xl font-bold text-gray-600 tracking-widest'>
            Our Location
          </h2>
          <p className='leading-7 text-gray-600 tracking-widest my-2'>
            We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it makes our lives better.
          </p>
          <p className='text-gray-600 tracking-widest mt-5'>
            Story on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it makes our lives better.
          </p>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-[50%] mx-auto'>
        <img className='p-9 w-full h-[33rem]' src={web} alt="" />
      </div>
    </div>
  );
}

export default ContectTwo;
