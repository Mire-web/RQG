import "./App.css";
import React, { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import $ from "jquery";
import Test from "./test.js";

function App() {
  const [text, setText] = useState({
    name: "",
    quote: "",
  });

  function fetchData(){
       // fetch data here and update state with
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_QUOTE_API_KEY,
      },
    };

    fetch(
      "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setText({
          name: response[0].author,
          quote: response[0].text,
        })
      )
      .catch((err) => console.error(err));
  }
  useEffect(fetchData, [])

  const body = document.querySelector("body");
  const twitter = document.querySelector("#twitter");
  const linkedin = document.querySelector("#linkedin");
  const button = document.querySelector("button");
  $(function () {

    let thisColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    body.style.backgroundColor = thisColor;
    body.style.color = thisColor;
    twitter.style.color = thisColor;
    button.style.border = `2px solid ${thisColor}`;
    linkedin.style.color = thisColor;
  });

  const changeText = () => {
    fetchData();
    let thisColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

    body.style.backgroundColor = thisColor;
    body.style.color = thisColor;
    twitter.style.color = thisColor;
    button.style.border = `2px solid ${thisColor}`;
    linkedin.style.color = thisColor;
  };

  return (
    <div className="App" id="quote-box">
      <Test num={text.quote} author={text.name} />
      <div className="box">
        <a
          href={`https://twitter.com/intent/tweet?text=${text.quote}\r%20-${text.name}`}
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
        >
          {
            <FaTwitter
              style={{ width: "30px", height: "30px", transition: "1s ease" }}
              id="twitter"
            />
          }{" "}
        </a>
        <a href='https://linkedin/in/mire-web' target="_blank" rel="noreferrer">
          {
            <FaLinkedinIn
              style={{
                width: "30px",
                height: "30px",
                marginLeft: "10px",
                transition: "1s ease",
              }}
              id="linkedin"
            />
          }
        </a>
        <button id="new-quote" onClick={changeText}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
