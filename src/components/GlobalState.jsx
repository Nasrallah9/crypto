import React from "react";
import millify from "millify";
const GlobalState = ({ list, precentage }) => {
  return (
    <div className="global-state">
      {list.map((item, index) => {
        return (
          <div className="info" key={item.id}>
            <h4>{item.text}</h4>
            {precentage && index > 1 ? (
              <p style={item.value > 0 ? { color: "green" } : { color: "red" }}>
                {millify(item.value)}%
              </p>
            ) : (
              <p>{millify(item.value)}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GlobalState;
