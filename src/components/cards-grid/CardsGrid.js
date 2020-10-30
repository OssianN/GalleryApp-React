/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import mockData from '../../MOCK/data';
import key from '../../config';

const CardsGrid = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch(`https://api.unsplash.com/search/photos?per_page=9&query=${props.search}&client_id=${key}&page=${props.pageNumber}`);
      const jsonResult = await result.json();
      setData(jsonResult.results);
    }  catch(err) {
      const jsonResult = mockData;
      setData(jsonResult.results);
    }
  } 

  useEffect( () => {
    fetchData()
  }, [props.search, props.pageNumber]);
  

  return (
    <div className='searchResults'>
      { data?.map( item =>
      <Card
        img={item.urls.regular}
        key={item.id}
        description={item.description ? item.description : 'No description found!'}
      /> )}
    </div>
  )
}

export default CardsGrid;