import React from 'react'
import ChefItem from './ChefItem'
import chefs from "./data.json";


const ChefGrid = () => {
  return  (
   
  
    <section className="cards">
      {chefs.map((chef) => (
        <ChefItem key={chef.id} chef={chef}></ChefItem>
      ))}
    </section>
  );
};

export default ChefGrid
