import React from "react";
import "./Header.css";

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <p id="bio">These are some projects which I have found interesting:</p>
        <div id="links">
          <a href="https://www.kaggle.com/jonathanbouchet/pokemon-battles">
            Visualization of Pokemon Data
            <br />
          </a>
          <a href="https://www.popularmechanics.com/technology/a25344/draw-your-own-nightmare-cats-with-this-ai-program/">
            Draw your own nightmare cats with this AI program <br />{" "}
          </a>
          <a href="https://www.youtube.com/watch?v=DWK_iYBl8cA">
            Joe Rogan's voice recreated with AI <br />{" "}
          </a>
        </div>
      </div>
    );
  }
}
