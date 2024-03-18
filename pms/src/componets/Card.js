// Card.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://product-management-syste-fd1a9-default-rtdb.firebaseio.com/data.json');
        const responseData = response.data;
        if (responseData) {
          const dataArray = Object.keys(responseData).map(key => responseData[key]);
          setData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(item => (
        <div key={item.pid} className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold">{item.pname}</h2>
          <img src= {item.image} alt="" />
          <p className="text-gray-600">{item.fname} {item.lname}</p>
          <p className="text-gray-600">{item.email}</p>
          <p className="text-gray-600">{item.pid}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
