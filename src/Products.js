import React from 'react';
import "./Products.css";

const Products = ({ data }) => {
  return (
    <div className='menu'>
      <div className='all-items'>
        {data.map((item) => (
          <div className='items' key={item.recipe.uri}>
            <img src={item.recipe.image} alt={`Image of ${item.recipe.label}`} />
            <div className='items-list'>
              <h5>{item.recipe.label}</h5>
              <p>Total Amount of Calories: {Math.round(item.recipe.calories)}</p>
              <button onClick={() => alert(`You clicked Buy for ${item.recipe.label}`)}>Buy</button>
            </div>
          </div>
        ))}
      </div>    
    </div>
  );
}

export default Products;
