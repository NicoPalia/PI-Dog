import React from "react";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <img key={props.id} src={props.img} className="img" alt={props.name} />
      <h4 className="name">{props.name} </h4>
      <h5>{props.weight} kg</h5>
      <span>{props.temperament} </span>
      <div className="temperaments">
        {props.temperaments?.map((t) => {
          return <span className="temps">{t.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
