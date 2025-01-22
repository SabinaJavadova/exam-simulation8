import React from "react";
import { BASE_URL } from "../../constant";
import { useState, useEffect } from "react";
import  axios  from "axios";
import Grid from '@mui/material/Grid2';
import style from "./index.module.scss"
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [goods, setGoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name")
const nav = useNavigate()
  const getGoods = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setGoods(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const sortedGoods = (goodsList)=>{
    const clonedGoods = [...goodsList]
    if (sortBy==="asc") {
        return clonedGoods.sort((a,b)=>a.price-b.price)
    }else if (sortBy==="desc")
    {
        return clonedGoods.sort((a,b)=>b.price-a.price)
    }
    return clonedGoods
  }

  const filteredGoods = goods.filter((g) =>{
   return g.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  })
  ;
  const sortedFiltered = sortedGoods(filteredGoods)

  useEffect(() => {
    getGoods();
  }, []);

  return <>
  
  <div className={style["container"]}>


  <div className="cont">

        <input type="text" placeholder="Search..." onChange={(e)=>setSearchQuery(e.target.value)} />
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
            <option value="default">default</option>
        </select>
 <div className={style["con"]}>
       
  <Grid container spacing={2}>
{
    sortedFiltered.length >0 && sortedFiltered.map((goods)=>
        <Grid size={{xs:12,md:6,lg:4}} key={goods._id} onClick={()=>{nav(`../Detail/${goods._id}`)}} >
            <img src={goods.img} alt="" />
            <h2>{goods.name}</h2>
            <p>{goods.description}</p>
            <span>${goods.price}</span>
    </Grid>)
}
      </Grid>
 </div>

  </div>
  </div>
  
  </>;
};

export default Product;
