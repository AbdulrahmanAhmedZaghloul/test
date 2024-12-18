import iconimage from '../../assets/image/black.png';

export default function Loading() {
    return (
        <div className="relative bg-transparent h-screen overflow-hidden right-0 z-[123123] flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-60 w-60 border-t-4 border-b-4 border-pink-700">
                <img className='w-full h-full' src={iconimage} alt="" />
            </div>
          
        </div>
    );
}
