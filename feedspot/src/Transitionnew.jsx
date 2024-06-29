import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};


const Transitionnew = (OgComponent) => {
  let count=0;
  let outcount=0;
  return () => (
    <>
      

      <div className="blocks-container transition-in">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
                onAnimationStart={()=>{
                  document.querySelector(".blocks-container.transition-out").style.display = 'none';
                }}
                onAnimationComplete={()=>{
                  count++;
                  if(count==110){
                    document.querySelector(".blocks-container.transition-out").style.display = 'flex';
                    document.querySelector(".blocks-container.transition-in").style.display = 'none';
                    count=0
                  }
                  // count=0;
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="blocks-container transition-out">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10) + 2,
                }}
                onAnimationComplete={()=>{
                  outcount++;
                  if(outcount==110){
                    document.querySelector(".blocks-container.transition-out").style.display = 'none';
                    outcount=0;
                  }
                  
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <motion.div
      initial={{ opacity: 0 }} // Optional: Initial animation state
      animate={{ opacity: 1 }} // Optional: Animation when component mounts
      transition={{
        delay: 1, // Delay of 1 second before animating
        duration: 1 // Animation duration of 1 second
      }}
    >
      <OgComponent />
    </motion.div>

      
    </>
  );
};

export default Transitionnew;
