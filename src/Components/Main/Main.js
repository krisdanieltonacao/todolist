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
    <div className="mainDiv">
      <h1 className="mainHeading"> What is on the calendar today?</h1>
      <div className="textArea">
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
      </div>
      <Button
        variant="contained"
        onClick={() => {
          addItem(item);
        }}
        className="addBtn"
      >
        ADD
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          deleteAllItems();
        }}
        className="deleteAllBtn"
      >
        Delete All
      </Button>

      <div className="items">
        {items.map((item, index) => {
          return (
            <div className="itemArea">
              <Todo data={item} />
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteItem(index);
                }}
              >
                DELETE
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
