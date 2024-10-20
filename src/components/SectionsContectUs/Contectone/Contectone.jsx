import content7 from '../../../image/about/person_4.jpg';

function Contectone() {
    return (
        <div className='flex justify-between items-center flex-wrap my-8'>

        <div className='lg:w-1/2 md:w-[40%] mx-auto'>
            <div className='p-10'>
                <img src={content7} alt="" />
            </div>
        </div>

        <div className='lg:w-1/2 md:w-[40%] mx-auto'>
            <div className='p-11 '>
                <h2 className='text-center text-xl font-bold text-gray-600 tracking-widest'>
                    Who we are?


                </h2>
                <p className='leading-7 text-gray-600 tracking-widest my-2'>
                    We have been operating for over 30 years and are
                    Members of The Federation of Master Builders. We work on
                    projects big and small from small residential extensions to full house.
                    We are so happy with this theme. Everyday it make our lives better.
                </p>
                <p className='text-gray-600 tracking-widest mt-5'>
                    Story on projects big and small from small residential extensions to full house.
                    We are so happy with this theme. Everyday it make our lives better
                </p>

                <div className="media py-2">
                    <i className="fab fa-envira px-4"></i>
                    <div className="media-body">
                        <h6 className="mt-0" >We care about environment.</h6>
                    </div>
                </div>
                <div className="media py-2">
                    <i className="fa-solid fa-users"></i>
                    <div className="media-body">
                        <h6 className="mt-0" >We are trusted by hundreds of clients.
                        </h6>
                    </div>
                </div>
                <div className="media py-2">
                    <i className="fa-solid fa-heart"></i>
                    <div className="media-body">
                        <h6 className="mt-0" >Social media loves us!
                        </h6>
                    </div>
                </div>
                <div className="media py-2">
                    <i className="fa-solid fa-check"></i>
                    <div className="media-body">
                        <h6 className="mt-0" >This list is super easy to create.
                        </h6>
                    </div>
                </div>
            </div>

        </div>
    </div>
        )
}

export default Contectone