import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSpeaker,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <div className="button--class">
      <div>
        <button className="quotes--button" onClick={props.onClick1}>
          read
        </button>
        <button className="quotes--button">
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </button>
        <button className="quotes--button">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </button>
      </div>
      <div className="new--quotes">
        <button className="new--quotes--button" onClick={props.onClick2}>
          {" "}
          New Quote{" "}
        </button>
      </div>
    </div>
  );
};

export default Button;
