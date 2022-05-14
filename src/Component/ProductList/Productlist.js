import Cards from "../Cards";
import './Productlist.css'
import React,{useState} from "react";

  export default function Productlist(prop) {  
    const [val,setVal] =useState ("")
      if(!prop.data)
      {
          return null
      }
      const oninputchange=(eventObj)=>{
        
        setVal(eventObj.target.value.toLowerCase())
      }

    return (
      <div className="ProductList">
          <div className="list-header">
            <div className="title-section">
          <h3>{prop.title} {prop.sub?<small>{prop.sub}</small>:null}</h3>
          <input type='text' value={val}  onChange={oninputchange}/>
          <span>Customer Searching:{val}</span>
          </div>
          <button>View All</button>
          </div>

        {
          prop.data.map((item,index)=>{
            if(item.title.toLowerCase().includes(val.toLowerCase())||item.desc.toLowerCase().includes(val.toLowerCase())){
            return <Cards key={index} Title={item.title} des={item.desc} img={item.img} />
          } 
          return null
          })
        }
      </div>
    );
  }