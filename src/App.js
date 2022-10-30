import "./styles.css";
import React, { useState } from "react";

// variable declaration

var emojis = {
  "🥭": "Mango",
  "🍍": "Pineapple",
  "🍉": "Watermelon",
  "🍇": "Grapes",
  "🍌": "Banana",
  "🍎": "Red apple",
  "🍐": "Pear",
  "🍓": "Strawberry",
  "🥥 ": "Coconut",
  "🥑": "Avocado"
};

let counter = 0;
var emojisWeKnow = Object.keys(emojis);

export default function App() {
  // state handling
  const [meaning, setMeaning] = useState("");

  // function definition
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this emoji.";
    }

    setMeaning(meaning);
  }

  function emojiHandler(item) {
    var meaning = emojis[item];
    setMeaning(meaning);
  }

  // view
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "blueviolet",
          color: "yellow",
          borderRadius: "0.5rem",
          padding: "1rem"
        }}
      >
        Identify the fruit emojis!
      </h1>

      <input
        placeholder="Input your emojis here"
        style={{ borderRadius: "1rem", padding: "1rem", textAlign: "center" }}
        onChange={emojiInputHandler}
      />

      <div style={{ color: "yellow", padding: "1rem", fontSize: "26px" }}>
        <span style={{ color: "whitesmoke" }}>Your emoji meaning ----</span>

        {meaning}
      </div>

      <h2 style={{ fontSize: "30px", color: "yellow" }}>
        Here are the emojis we know:
      </h2>

      {emojisWeKnow.map(function (item) {
        return (
          <span
            style={{ fontSize: "1.5rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => emojiHandler(item)}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

// For each items return something back to the view
// emojisWeKnow we can map using arrow function
// We access an object using arrow function
