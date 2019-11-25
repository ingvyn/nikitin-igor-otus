import React from 'react';
import WeatherFavoredItem from './favoredItem';

function FavoredList(props) {
  const itemList = props.itemList;
  return (
    <div>
      {itemList.map(item => (
        <WeatherFavoredItem report={item} key={item.id} />
      ))}
    </div>
  );
}

export default FavoredList;
