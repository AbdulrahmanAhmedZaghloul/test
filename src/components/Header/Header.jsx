import video from '../../assets/image/WhatsApp Video 2024-11-27 at 12.07.23 PM.mp4';
import img from '../../assets/image/footer.png';

function Header() {
  return (
    <div className="relative header-img">
      {/* فيديو الخلفية */}
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-auto object-cover"
      ></video>

      {/* الطبقة فوق الفيديو */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Header;
