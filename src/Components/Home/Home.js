import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="mainHome">
      <h1 className="headingHome">Welcome to my TODO List App!</h1>
      <Button
        variant="light"
        className="getStartedBtn"
        onClick={() => {
          navigate("/main");
        }}
      >
        Get Started
      </Button>{" "}
    </div>
  );
}
export default Home;
