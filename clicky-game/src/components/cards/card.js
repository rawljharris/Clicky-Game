import React from 'react';
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={() => props.clickCount(props.id)} style={{
      height: "fill",
      width: "fill"
    }}>
      <div className="img-container">
        <img alt={props.name} src={props.image} style={{
          height: "106%",
          width: "100%",
        }} />
      </div>
    </div>
  )
}

export default Card;