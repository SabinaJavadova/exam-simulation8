import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import { useState ,useEffect } from "react";
import axios from "axios"
const Detail = () => {
  const [good, setgood] = useState([]);

  const { id } = useParams();

  const getGood = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${id}`);
      setgood(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
 getGood()
  }, [id])
  
  return <>
  
  {
    good && 
    <div>
        <img src={good.img} alt="" />
        <h2>{good.name}</h2>
        <p>{good.descriptionn}</p>
        <p>{good.price}</p>
    </div> 
  }
  </>;
};

export default Detail;
