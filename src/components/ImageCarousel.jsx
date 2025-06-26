import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faDatabase, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    return (
        <div className="relative flex items-center justify-center w-full h-[500px] lg:h-[500px] sm:h-[300px] overflow-hidden">
          <img
            className="h-full lg:h-[500px] sm:h-[300px] contain rounded-tl-[10px] rounded-tr-[10px]"
            src={images[currentIndex]}
            alt={`carousel ${currentIndex + 1}`}
          />
          <button
            className="absolute h-[50px] w-[50px] top-1/2 left-2 transform rounded-full -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-lg cursor-pointer hover:bg-opacity-80"
            onClick={prevImage}
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
          <button
            className="absolute h-[50px] w-[50px] top-1/2 right-2 transform rounded-full -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-lg cursor-pointer hover:bg-opacity-80"
            onClick={nextImage}
          >
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </div>
      );
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure images is an array of strings (URLs)
};

export default ImageCarousel