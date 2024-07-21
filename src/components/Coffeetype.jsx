import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.mov'
import { motion } from 'framer-motion';
const CoffeeType = ({ addCoffeeType, coffee }) => {
  const coffeeTypes = [
    'Espresso',
    'Latte',
    'Cappuccino',
    'Americano',
    'Mocha',
    'Macchiato',
    'Flat White',
    'Ristretto',
    'Affogato',
    'Cortado'
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
      className='flex text-center flex-col justify-center items-center pt-32'>
      <h3 
  
      className='text-white font-mono font-bold text-4xl'> Choose Your Coffee Type</h3>
      <ul className='mt-10'>
        {coffeeTypes.map(coffeeType => {
          let spanClass = coffee.coffeeType === coffeeType ? 'active' : '';
          return (
            <li className=' cursor-pointer text-lg' key={coffeeType} onClick={() => addCoffeeType(coffeeType)}>
              <span className='text-white font-light font-mono'>{coffeeType}</span>
            </li>
          );
        })}
      </ul>
<div className='flex flex-1 flex-row gap-6'>
{coffee.coffeeType && (
        <div className="back">
          <Link to="/">
            <motion.button 
            initial={{x: 350,delay:0.5}}
             animate={{x: 0}}
            className=' flex justify-center mt-4 border text-white rounded py-3 px-6 hover:bg-slate-900 '>Back</motion.button>
          </Link>
        </div>

      )}
      {coffee.coffeeType && (
        <div className="next">
          <Link to="/toppings">
            <motion.button 
            initial={{x: -350,delay:0.5}}
             animate={{x: 0}}
            className=' flex justify-center mt-4 border text-white rounded py-3 px-6 hover:bg-slate-900 '>Next</motion.button>
          </Link>
        </div>

      )}
</div>
      
      </motion.div>
    </div>
  );
}

export default CoffeeType;
