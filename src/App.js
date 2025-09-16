import React from 'react';
import PropTypes from 'prop-types';

function Fruit({ name, picture, rating }){
  return (
      <div>
          <h2>I like {name}</h2>
          <h4> {rating} / 5.0 </h4>
          <img src= {picture} alt={name} />
      </div>
  );
}

const fruitILike = [
  {
      id : 1,
      name : 'banana',
      image: 'http://hschool.co.kr/images/banana.png',
      rating: 5,
  },
  {
      id : 2,
      name : 'orange',
      image: 'http://hschool.co.kr/images/orange.png',
      rating: 4.9,
  },
  {
      id : 3,
      name : 'apple',
      image: 'http://hschool.co.kr/images/apple.png',
      rating: 4.5,
  },
  {
      id : 4,
      name : 'melon',
      image: 'http://hschool.co.kr/images/melon.png',
      rating: 4.8,
  },
];

function App() {
  return (
    <div> 
      {fruitILike.map(dish => (
        <Fruit key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
