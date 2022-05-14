
import './Cards.css'
import React,{useEffect} from 'react'
export default function Cards(prop) {
  useEffect(()=>{
    return()=>{
      console.log(prop.Title)
    }
  });
  return (
    <div className='card-wrapper'>
<img src={prop.img} alt="true"/>
<h3>{prop.Title}</h3>
<p>{prop.des}</p>

<button onClick={(event)=>{alert('User Clicked '+ prop.Title)}}>Add to Cart</button>
    </div>    
  )
}
