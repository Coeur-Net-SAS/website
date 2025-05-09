import React,{ useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { clients } from '../constants'
import styles from '../style'
//import ScrollCarousel from 'scroll-carousel';


const CarouselPartenaire = () => {
  /*
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className={styles.heading2}> <span className='text-gradient'> Ils nous soutiennent </span> </h2>
      <div className="relative overflow-hidden">
      
        <div className="flex justify-between absolute top left w-full h-full">
        
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt='client'
              className=' object-contain'
            />         
          </div>
        ))}
        </div>
      </div>
    </div>
  );
  */
 return(
  <div class="ss-carousel__wrapper" >
                        <div class="ss-carousel__header">
                        <h1 class="fw-bold text-gradient">Ils nous soutiennent</h1>
                            <div class="ss-carousel__controls">
                              <button class="ss-carousel__arrow disabled arrow-prev"></button>
                              <button class="ss-carousel__arrow arrow-next"></button>
                            </div>
                          </div>
                      <ul className="ss-carousel__content">
  {clients.map((client) => (
    <li key={client.id} className={`ss-carousel__item flex-1 ${styles.flexCenter}`}>
      <a href="#">
      <img
        src={client.logo}
        alt={client.id}
        className='ss-carousel__item__image'
      />
      </a>         
    </li>
  ))}
  
  </ul>
                    </div>
  
 );
};


const e = React.createElement;
const root = createRoot(document.getElementById("CarouselPartenaire"));
root.render(e(CarouselPartenaire));



