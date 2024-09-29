import React, { useEffect, useState } from 'react'
import CircularProgressBar from './CirecularProgressBar';

const Achievment = () => {
    
    const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prevProgress) => {
        if (prevProgress >= 99) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress2((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress3((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='m-10'>
        <div>
            <h3 className='md:text-4xl text-3xl font-semibold text-center'>What we achieved !!</h3>
            <div className='flex flex-col md:flex-row p-2 md:p-12'>
                <div className=' flex flex-col justify-center items-center mx-2 md:mx-9 p-2 md:p-4 my-4 md:my-0'>       
                <CircularProgressBar progress={progress1} label="99%"/>
                    <h4 className='font-semibold text-base md:text-lg my-1 md:my-2'>Client Satisfaction Rate</h4>
                    <p className='text-center text-wrap text-sm md:text-base w-72 md:w-96'>Showcasing our commitment to delivering successful outcomes in every project we undertake.</p>
                </div>
                <div className=' flex flex-col justify-center items-center mx-2 md:mx-9 p-2 md:p-4 my-4 md:my-0'>          
                  <CircularProgressBar progress={progress2} label="1500+" />
                    <h4 className='font-semibold text-base md:text-lg my-1 md:my-2'>Success Client Stories</h4>
                    <p className='text-center text-wrap text-sm md:text-base w-72 md:w-96'>Highlighting our extensive experience and the wide trust we've garnered across various sectors.</p>
                </div>
                <div className=' flex flex-col justify-center items-center mx-2 md:mx-9 p-2 md:p-4 my-4 md:my-0'>
                    <CircularProgressBar progress={progress3} label="₹600 Cr" />
                    <h4  className='font-semibold text-base md:text-lg my-1 md:my-2'>In Client Growth</h4>
                    <p className='text-center text-wrap text-sm md:text-base w-72 md:w-96'>Reflecting the significant financial impact and value we've contributed to our clients' businesses through our strategic interventions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievment