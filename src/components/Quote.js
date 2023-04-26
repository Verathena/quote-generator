import React from "react";

const Quote = () => {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  return (
    <div>
      <button>Get Quote</button>
    </div>
  );
};

export default Quote;
