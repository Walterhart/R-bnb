import React from 'react'
import { BsStarFill } from "react-icons/bs";

interface Props{
  img: string,
  alt: string,
  rating: number,
  reviewCount: number,
  location: string,
  title: string,
  price: number,
  openSpots: number,
}

const Card: React.FC<Props> = (props) => {
  let openStatusText
  if( props.openSpots === 0){
    openStatusText = "SOLD OUT"
  }
  else if (props.location === "Online"){ 
    openStatusText = "ONLINE"
  }

  return (
    <div className='card'>
     {openStatusText && <div className='open-close'>{openStatusText} </div>}
      <img src={process.env.PUBLIC_URL + `/images/${props.img}`} alt={props.alt}  className='card-image'/>
      <div className='card-stats'>
        <span >< BsStarFill/>{props.rating}</span>
        <span className='fade'>({props.reviewCount}) •</span>
        <span className='fade'>{props.location}</span>
      </div>
        <p className="card--title"> {props.title }</p>
        <p> <span className='bold card--price'>${props.price}</span> per person </p>
      </div>
  )
}

export default Card