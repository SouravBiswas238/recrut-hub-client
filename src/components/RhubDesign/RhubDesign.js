import React from 'react';

const RhubDesign = () => {
  return (
    <div className='my-20'>
      <div className="flex  w-full flex-row">
        <div className="grid flex-grow  h-32 card bg-base-100 rounded-box place-items-center">
          <h1 className='text-xl md:text-7xl text-right font-bold'>Recruit Hub</h1>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow flex-between h-32 card bg-base-100 rounded-box place-items-center">
          <h1 className='text-xl md:text-4xl text-left justify-end font-medium'>Modern Solutionsd <br /> For <span className='text-primary'>Creative Agency</span> </h1>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default RhubDesign;