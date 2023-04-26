import React from "react";

const Card = () => {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

    return (
        
          <div>
            <button
              onClick={getQuote}
              className="bg-green-400 px-5 py-4 mt-5 text-white"
            >
              Get Quote
            </button>
          </div>
       
      );
export default Card;
