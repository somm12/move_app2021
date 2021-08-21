import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt="" />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
  },
  {
    name: "Ramen",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
  },
  {
    name: "Bulgogi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
  },
  {
    name: "teokbokgi",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
  },
  {
    name: "Kimbap",
    image:
      "https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
