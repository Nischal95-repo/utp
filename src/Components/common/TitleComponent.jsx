import React from "react";

function TitleComponent(props) {
  return (
    <div className="row title">
      <span> {props.title}</span>
    </div>
  );
}

export default TitleComponent;
