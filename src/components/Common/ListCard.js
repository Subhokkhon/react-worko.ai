import React from 'react';

const ListCard = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ListCard;
