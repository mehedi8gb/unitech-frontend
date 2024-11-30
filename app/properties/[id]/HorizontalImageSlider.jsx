import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const HorizontalImageSlider = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePrevious = (e) => {
    e?.stopPropagation();
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious(e);
    if (e.key === 'ArrowRight') handleNext(e);
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div className="w-full">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; background-color: rgba(0, 0, 0, 0); }
          to { opacity: 1; background-color: rgba(0, 0, 0, 0.9); }
        }

        @keyframes slideInFromRight {
          from { 
            transform: translateX(100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from { 
            transform: translateX(-100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .slide-in-right { animation: slideInFromRight 0.5s ease-out forwards; }
        .slide-in-left { animation: slideInFromLeft 0.5s ease-out forwards; }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Horizontal Thumbnail Slider */}
      <div className="relative group w-full py-4">
        <div 
          ref={scrollRef}
          className="flex justify-center overflow-x-auto gap-4 px-4 hide-scrollbar scroll-smooth"
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-none w-48 h-40 overflow-hidden rounded-lg"
            >
              <Image
                width={192}
                height={160}
                src={image?.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
        
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transform hover:scale-110 transition-all duration-200 z-50"
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transform hover:scale-110 transition-all duration-200 z-50"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transform hover:scale-110 transition-all duration-200 z-50"
          >
            <ChevronRight size={36} />
          </button>

          {/* Main image */}
          <div
            className="relative max-w-[90%] max-h-[80vh] w-full mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          > 
            <Image
              key={currentIndex}
              height={800}
              width={1200}
              src={images[currentIndex]?.src}
              alt={`Image ${currentIndex + 1}`}
              className={`w-full h-full object-contain ${
                currentIndex > previousIndex ? 'slide-in-right' : 'slide-in-left'
              }`}
              style={{
                maxWidth: '90%',
                maxHeight: '80vh',
              }}
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalImageSlider;