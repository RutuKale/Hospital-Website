import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeartbeatLoader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-300">
            <div className="w-22 h-22 sm:w-32 sm:h-32 md:w-52 md:h-52 lg:w-64 lg:h-64">
                <DotLottieReact
                    src="https://assets-v2.lottiefiles.com/a/efcfca9e-1167-11ee-a8ac-df03419bb831/m3Hh2IA8Xx.lottie"
                    loop
                    autoplay
                />
            </div>
            <h2 className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-gray-700 tracking-wider">Loading...</h2>
        </div>
    );
};

export default HeartbeatLoader;
