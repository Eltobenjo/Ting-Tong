import React from 'react'
import ChefItem from './ChefItem'
import chefs from "./data.json";


const ChefGrid = () => {
  return  (
    <div>
  <div><h1>Ting Tong's Certified Chefs</h1></div>
    <div>
    <section className="cards">
      {chefs.map((chef) => (
        <ChefItem key={chef.id} chef={chef}></ChefItem>
      ))}
    </section>
    </div>
    </div>
  );
};

export default ChefGrid
