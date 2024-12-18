import  { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const ImageSlider = ({ images, onImageClick }) => {
    const location = useLocation();

    const [mainImage, setMainImage] = useState(images[0]?.url || '');
    const product = location.state?.product;

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={`${product?.images?.length === 0 ? 'hidden' : 'flex justify-center fa-solid fa-chevron-down text-pink-600 text-4xl font-semibold cursor-pointer z-10'}`}
                onClick={onClick}
            />
        );
    };

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={`${product?.images?.length === 0 ? 'hidden' : 'flex justify-center fa-solid fa-chevron-up text-pink-600 text-4xl font-semibold cursor-pointer z-10'}`}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    CustomNextArrow.propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    CustomPrevArrow.propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    return (
        <div className="w-[30%] p-2 flex justify-center items-center flex-col relative">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.url}
                        alt={`Thumbnail ${index}`}
                        className={`w-28 h-28 object-contain cursor-pointer my-1 ${mainImage === img.url ? 'border-pink-500' : 'border-gray-300'}`}
                        onClick={() => {
                            setMainImage(img.url);
                            onImageClick(img.url);
                        }}
                    />
                ))}
            </Slider>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageSlider;
