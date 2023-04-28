import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../styles/Quote.css"

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

  const handleClick = () => {
    window.location.reload()
 }

 const handleSpeech = () => {
  
  const toRead = randomQuote.text
  const utterance = new SpeechSynthesisUtterance(toRead);
  speechSynthesis.speak(utterance);
}


  return (
    <div className="wrapper">
      <div className="quotes--section">
      <h1>Quotes of the day</h1>
      <div key={randomQuote.id}>
        <p>
           <span className="quotes--span">"</span> {randomQuote.text} <span className="quotes--span">"</span> </p>
        <i className="quotes--author"> - {randomQuote.author}</i>
      </div>
      <div>
        <hr/>
      </div>
      <Button
      onClick1 = {handleSpeech}
      onClick2 = {handleClick}
      />
    </div>
    </div>
  );
};
export default Quote;
