import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.mov'
import { motion} from "framer-motion"
const Home = () => {
  return (
    <div className="home min-h-screen flex items-center justify-center overflow-y-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative z-10 text-white text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-8">Welcome to Coffee Joint</h2>
        <Link to="/coffeetype">
          <motion.button className="bg-transparent border text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-slate-900"
          initial={{y: 300, delay:0.5}}
          animate={{y: 10}}
          >
            Make Your Coffee
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
