import React, { useEffect, useState } from "react";
import Button from './Button'

const Quote = () => {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const dataLength = data.length;
        const randomId = Math.floor(Math.random() * dataLength);
        setRandomQuote(data[randomId]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Quotes of the day</h1>
      <div key={randomQuote.id}>
        <p>{randomQuote.text}</p>
        <i>{randomQuote.author}</i>
      </div>
      <Button/>
    </div>
  );
};
export default Quote;
