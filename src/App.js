import React, { useState, useEffect } from "react";

const App = () => {
  var [quote, setQuotes] = useState([{}]);
  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async (e) => {
    const data = await fetch("https://type.fit/api/quotes");
    const response = await data.json();
    setQuotes(response);
  };

  function randQuote() {
    let tempQuote = Math.floor(Math.random() * quote.length);
    return tempQuote;
  }

  return (
    <div className="App">
      <main>
        <div className="text">"{quote[randQuote()].text}"</div>
        <div className="author">
          ~
          {quote[randQuote()].author != null
            ? quote[randQuote()].author
            : "Unknown"}
        </div>
        <br />
        <button
          className="button"
          onClick={(e) => {
            getQuotes();
          }}
        >
          Press here to get a random quote
        </button>
      </main>
    </div>
  );
};

export default App;
