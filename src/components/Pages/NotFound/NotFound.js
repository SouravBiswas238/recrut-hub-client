import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import notFoundlottie from './error-not-found.json'
const NotFound = () => {

    // for lottie 
    const anime = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: notFoundlottie,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });
        // More logic goes here
    }, []);
    return (
        <div className='h-screen flex justify-center items-center bg-[#f3f3f3] dark:bg-[#182133]'>
            <div className='flex justify-center items-center'>
                <div className='w-fit mx-auto'>
                    <div className="overflow-hidden" style={{ "height": "500px", "width": "100%", "overflow": "hidden", "outline": "none", "margin": "0 auto" }} ref={anime}>
                    </div>;
                </div>
            </div>
        </div>
    );
};

export default NotFound;