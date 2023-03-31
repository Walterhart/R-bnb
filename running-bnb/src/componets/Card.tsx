import React from "react";
import { BsStarFill } from "react-icons/bs";

interface Props {
  coverImg: string;
  alt: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  title: string;
  description: string;
  price: number;
  openSpots: number;
}

const Card: React.FC<Props> = (props) => {
  let openStatusText;
  if (props.openSpots === 0) {
    openStatusText = "SOLD OUT";
  } else if (props.location === "Online") {
    openStatusText = "ONLINE";
  }

  return (
    <div className="card">
      {openStatusText && <div className="open-close">{openStatusText} </div>}
      {props.location === "ONLINE" && (
        <div className="open-close">{openStatusText} </div>
      )}
      <img
        src={process.env.PUBLIC_URL + `/images/${props.coverImg}`}
        alt={props.alt}
        className="card-image"
      />
      <div className="card-stats">
        <span>
          <BsStarFill />
          {props.stats.rating}
        </span>
        <span className="fade">({props.stats.reviewCount}) •</span>
        <span className="fade">{props.location}</span>
      </div>
      <p className="card-title"> {props.title}</p>
      <p>
        {" "}
        <span className="card-description">{props.description}</span>
      </p>
      <p>
        {" "}
        <span className="bold card-price">${props.price}</span> per person{" "}
      </p>
    </div>
  );
};

export default Card;
