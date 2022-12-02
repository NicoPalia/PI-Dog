import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getDog } from "../Redux/action";

function Cards() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  React.useEffect(() => {
    dispatch(getDog());
  }, [dispatch]);

  return (
    <div className="cards">
      {dogs?.map((d) => {
        return (
          <Link to={`/dogs/${d.id}`}>
            <Card
              className="card"
              key={d.id}
              id={d.id}
              name={d.name}
              img={d.img}
              weight={d.weight}
              temperament={d.temperament}
              temperaments={d.temperaments}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
