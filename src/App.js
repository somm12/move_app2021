import React from "react";
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bulgogi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "teokbokgi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
    rating: 4.4,
  },
];
//prop-types is for checking if sending props are same with receiving props
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0 </h4>
      <img src={picture} alt="" />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
