import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CoffeeType from './components/Coffeetype'; 
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  const [coffee, setCoffee] = useState({ coffeeType: "", toppings: [] });

  const addCoffeeType = (coffeeType) => {
    setCoffee({ ...coffee, coffeeType });
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!coffee.toppings.includes(topping)) {
      newToppings = [...coffee.toppings, topping];
    } else {
      newToppings = coffee.toppings.filter(item => item !== topping);
    }
    setCoffee({ ...coffee, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/coffeetype" element={<CoffeeType addCoffeeType={addCoffeeType} coffee={coffee} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} coffee={coffee} />} />
          <Route path="/order" element={<Order coffee={coffee} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
