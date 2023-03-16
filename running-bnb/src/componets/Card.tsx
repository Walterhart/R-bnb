import React from 'react'
import { BsStarFill } from "react-icons/bs";

interface Props{
  img: string,
  rating: number,
  reviewCount: number,
  country: string,
  title: string,
  price: number,
}

const Card: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <img src={process.env.PUBLIC_URL + `/images/${props.img}`} alt="Activity"  className='card-image'/>
      <div className='card-stats'>
        <span >< BsStarFill/>{props.rating}</span>
        <span className='fade'>({props.reviewCount}) •</span>
        <span className='fade'>{props.country}</span>
      </div>
        <p> {props.title}</p>
        <p> <span className='bold'>${props.price}</span> per person </p>
      </div>
  )
}

export default Card