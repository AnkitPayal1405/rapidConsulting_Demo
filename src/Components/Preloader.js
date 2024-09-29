import React, { useEffect, useState } from 'react'
import rcLogo from '../Assests/rc logo.png'

const Preloader = ({ onLoad }) => {

    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPercentage(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    onLoad();
                    return prev;
                }
            })
        }, 20);

        return () => clearInterval(interval)
    }, [onLoad])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            {/* Main Heading with responsive text size */}
            <div className='flex flex-col md:flex-row items-center justify-center font-bold gap-8 text-center'>
                <h1 className="text-3xl md:text-5xl lg:text-7xl">Your Experience with</h1>
                <img
                    src={rcLogo}
                    alt="Rapid Consulting"
                    className="mx-auto mb-4 w-32 md:w-32 lg:w-40" 
                />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8'>
                <h2 className="text-2xl md:text-4xl lg:text-5xl my-2 font-light">is Loading in</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold w-28 md:w-56">{loadingPercentage} - 100</h2>
            </div>
        </div>
    )
}

export default Preloader;
