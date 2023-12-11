import React, { useEffect, useState } from 'react'

const Fetch_Data = () => {
  const [Data,setData]=useState([]);
    useEffect(()=>{
        const Fetch_Api=async()=>{
            const apiData=await fetch("https://jsonplaceholder.typicode.com/photos");
            const value=await apiData.json();
            console.log(value);
            setData(value)
        }
        Fetch_Api();
    },[])
  return (
    <div>
      <h1>The Fetched Data</h1>
      {Data.map((items)=>{
        return(
          <div key={items.id} className='d-flex justify-content-center'>
          <h1>{items.title}</h1>
          <img src={items.url}></img>
          </div>
        );
      })}
    </div>
  )
}

export default Fetch_Data
