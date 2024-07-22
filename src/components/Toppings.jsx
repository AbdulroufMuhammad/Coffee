import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.mov'
import { motion } from 'framer-motion';
const Toppings = ({ addTopping, coffee }) => {
  const toppings = [
    'cinnamon', 
    'whipped cream', 
    'chocolate syrup', 
    'caramel drizzle', 
    'vanilla syrup', 
    'hazelnut syrup'
  ];

  return (
    <div className="container ">
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <video className=' absolute inset-0 w-full h-full object-cover' autoPlay loop muted src={bg}></video>
      </div>
      <div className='-z-10 absolute inset-0 bg-black opacity-65'></div>
    <motion.div
      initial={{y: -250}}
      animate={{y: 0}}
    className="toppings container justify-center items-center py-24 flex flex-col">
      <h3 className='sm:text-5xl md:text-6xl text-center text-white font-mono text-4xl'>Choose Toppings:</h3>
      <ul className='mt-4 '>
  {toppings.map(topping => {
    let isActive = coffee.toppings.includes(topping);
    let spanClass = isActive ? 'active' : '';
    return (
      <li 
        className='mb-2 cursor-pointer text-white font-mono text-lg border rounded px-40 py-2 text-center hover:bg-slate-950 ' 
        key={topping} 
        onClick={() => addTopping(topping)}
      >
        <span className={`${spanClass} inline-flex items-center`}>
          {topping} {isActive && <span className="ml-2">✓</span>}
        </span>
      </li>
    );
  })}
</ul>

<div className='flex flex-1 flex-row gap-10'>
{coffee.toppings.length > 0 && (
        <Link to="/coffeetype">
          <motion.button 
           initial={{x: -350,delay:0.5}}
           animate={{x: 0}}
          className='flex justify-center mt-4 border text-white rounded py-3 px-6 hover:bg-slate-900 '>
            Back
          </motion.button>
        </Link>
      )}
       {coffee.toppings.length > 0 && (
        <Link to="/order">
          <motion.button 
           initial={{x: 350,delay:0.5}}
           animate={{x: 0}}
           
          className='flex justify-center mt-4 border text-white rounded py-3 px-6 hover:bg-slate-900 '>
            Order
          </motion.button>
        </Link>
      )}
</div>
    </motion.div>
    </div>
  );
}

export default Toppings;
