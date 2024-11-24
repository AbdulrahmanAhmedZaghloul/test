
export default function Loading() {
    return (
        <div className="relative bg-transparent h-screen overflow-hidden right-0 z-[123123] flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-60 w-60 border-t-4 border-b-4 border-purple-500"></div>
            <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                className="rounded-full h-56 w-56" />
        </div>
    );
}
