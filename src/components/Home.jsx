import React from 'react';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/js/pizzas'; 

const Home = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card-container">
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
