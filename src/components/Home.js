import React from "react";
import "./Home.css";
import Product from "./Product";
import { useEffect, useState } from 'react';

function Home() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchProductHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://run.mocky.io/v3/0070b234-423e-4939-bae3-be024e1e70df");
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log("jncrbvrbv")
      console.log(data);
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductHandler();
  }, []);

  return (
    <div className="home">

      <div className="home__container">
          <img
            className="home__image"
            src="https://img.freepik.com/free-vector/black-friday-sale-banner-design-with-shopping-trolly_1055-9167.jpg?w=2000"
            alt=""
          />


          <div className="home__row">


            {products.map((product)=> 
              (
              <Product 
              key={product.id}
              id={product.id} 
              title={product.title} 
              image={product.image} 
              price={product.price} 
              rating={product.get_overall_rating} />
              ))
            } 
          
          </div>
      </div>
    </div>
  );
}

export default Home;
