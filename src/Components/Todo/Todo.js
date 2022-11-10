import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Todo(props) {
  return (
    <div>
      <Alert
        style={{
          "background-color": "yellow",
          border: "2px solid black",
          width: "500px",
          padding: "20px",
          overflow: "scroll",
          "text-align": "left",
        }}
      >
        {props.data}
      </Alert>
    </div>
  );
}
