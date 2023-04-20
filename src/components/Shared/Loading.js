import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import loadingData from './Lottiefile/97930-loading.json';

const Loading = ({ imgWidth, height }) => {
  // For lottie animation
  const anime = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    // More logic goes here
  }, []);
  return (
    <div className={`${height ? height : "h-[70vh]"} flex justify-center items-center`}>
      <div>
        {/* <div style={{ borderTopColor: 'transparent' }}
                    className="w-16 h-16 border-8 border-blue-400 border-solid rounded-full animate-spin">

                </div> */}
        <div
          className="overflow-hidden mx-auto"
          style={{ height: 400, width: 300 }}
          ref={anime}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
