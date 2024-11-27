import video from '../../assets/image/video.mp4';
import img from '../../assets/image/footer.png';

function Header() {
  return (
    <div className="relative header-img">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-auto object-cover"
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Header;
