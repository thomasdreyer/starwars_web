import React from 'react'
import './Loading.css';

export default function Loading(){
  return(
    <div style={{
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100
    }}>
    <div className="starwars-demo">
      <img src="https://cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"/>
      <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"/>
      <h2 className="byline" id="byline">The Force Awakens</h2>
    </div>
    </div>
  )
}
