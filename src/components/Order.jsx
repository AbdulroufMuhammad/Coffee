import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.mov'
import { motion } from 'framer-motion';
const Order = ({ coffee }) => {
  return (
    <div className="container overflow-hidden ">
    <div className='absolute inset-0 overflow-hidden -z-10'>
      <video className=' absolute inset-0 w-full h-full object-cover' autoPlay loop muted src={bg}></video>
    </div>
    <div className='-z-10 absolute inset-0 bg-black opacity-65'></div>
    <motion.div className="container order flex items-center flex-col py-44">
      <h2 className=' text-white text-4xl font-mono font-light sm:text-5xl md:text-6xl text-wrap text-center mt-[-20px]'>Thank you for your order :)</h2>
      <p className='my-4 text-lg text-white font-mono font-light'>You ordered a {coffee.coffeeType} with:</p>
      {coffee.toppings.map(topping => <li className= ' text-white font-mono text-lg ' key={topping}>{topping}</li>)}

      <div className="home-link gap-10 flex">
      <Link to="/">
          <motion.button className="bg-transparent border text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-slate-900"
          initial={{x: -950}}
          animate={{x: 10}}
          >
             Home
          </motion.button>
        </Link>
        <Link to="/toppings">
          <motion.button className="bg-transparent border text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-slate-900"
          initial={{x: 950}}
          animate={{x: 10}}
          >
            Back
          </motion.button>
        </Link>
      </div>
      <div className='py-4 flex justify-center items-center pl-5'>
      <Link to="#">
          <motion.button className="bg-transparent border text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-slate-950"
          initial={{y: 3050}}
          animate={{y: 10}}
          >
            Pay for the Order
          </motion.button>
        </Link>
      </div>
    </motion.div>
    </div>
  )
}

export default Order;
