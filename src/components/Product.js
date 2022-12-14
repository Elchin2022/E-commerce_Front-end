import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ key, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: key,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        
      </div>

      <img src={image} alt="" />
      <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
      </p>
        <div className="product__rating">
          {Array(parseInt(rating))
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
