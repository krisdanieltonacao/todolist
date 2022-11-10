import React from "react";
import "./Main.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Todo from "../Todo/Todo";

export default function Main() {
  const [items, setItems] = useState([
    "walk the dog",
    "Pick up Joe",
    "Go to the supermarket",
  ]);
  const [item, setItem] = useState();

  const addItem = (item1) => {
    const newItems = [...items, item1];
    setItems(newItems);
  };

  function deleteItem(key) {
    setItems((items) => items.filter((item1, i) => i !== key));
  }
  function deleteAllItems() {
    setItems([]);
  }
  return (
    <div className="main">
      <h1 className="mainHeading"> What is on the calendar today?</h1>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        className="inputMain"
      >
        <TextField
          fullWidth
          label="New Entry"
          id="fullWidth"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{ position: "absolute", top: "32%", left: "43%" }}
        onClick={() => {
          addItem(item);
        }}
      >
        ADD
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ position: "absolute", top: "37%", left: "43%" }}
        onClick={() => {
          deleteAllItems();
        }}
      >
        Delete All
      </Button>
      <div className="items">
        {items.map((item, index) => {
          return (
            <>
              <Todo data={item} />
              <Button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                DELETE
              </Button>
            </>
          );
        })}
      </div>
    </div>
  );
}
