import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
const Card = ({ id, name, image, list }) => {
  console.log(list);
  return (
    <Link to={`/cryptocur/${id}`}>
      <div className="card">
        <div className="header">
          <h4>{name}</h4>
          <img src={image} alt="" />
        </div>
        <ul className="info">
          {list.map((item, index) => {
            return (
              <li>
                <h5>{item.title}: </h5>
                {index > 1 ? (
                  <span
                    style={
                      item.number > 0 ? { color: "green" } : { color: "red" }
                    }
                  >
                    {millify(item.number)}%{" "}
                  </span>
                ) : (
                  <span>{millify(item.number)}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
