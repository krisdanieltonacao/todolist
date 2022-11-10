import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Todo(props) {
  return (
    <div>
      <Alert
        style={{
          "background-color": "lightblue",
          border: "2px solid black",
          padding: "5px",
          width: "25%",
        }}
      >
        {props.data}
      </Alert>
      <br></br>
    </div>
  );
}
