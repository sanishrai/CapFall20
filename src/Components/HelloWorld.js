import React from "react";

function HelloWorld(props) {
  // Using props parameter to add functionality to pass data into the HelloWorld hook
  return <h1>Hello {props.name}</h1>;
}

export default HelloWorld;
