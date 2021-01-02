// NPM
import React from "react";

function Boxes(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {props.box.map(function (item, index) {
            return (
              <div
                className="card col s12 m5 offset-m1 l3 offset-l1"
                style={style}
                key={index}
              >
                <div className="card-image">
                    
                </div>
                <div style="" className="card-title center">
                  <b>{item.itemTitle}</b>
                </div>
                <div style="" className="card-content center">
                  <p>{item.itemSubtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Boxes;