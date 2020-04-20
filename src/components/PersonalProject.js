import React from "react";
import "./PersonalProject.css";

export default class PersonalProject extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p id="bio">
            Hello, I'm <span style={{ color: "rgb(214,77,49)" }}>Perry</span>.
            Apart from software engineering, I have a strong interest in Data
            Science. <br /> These are some of my personal projects:
          </p>
        </div>

        <div className="personal-project-container">
          <div className="card" style={{ width: "18rem" }}>
            <div className="Card.Img" variant="top" src="pokemon.png" />
            <div className="card-body">
              <h5 className="card-title">Clone of Google Search</h5>
              <p className="card-text">
                A clone of the google search page for my first project.
              </p>
              <a
                href="http://perrylzx.github.io/google-clone"
                className="card-link"
              >
                Here
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Todolist</h5>
              <p className="card-text">A todolist made in react and redux.</p>
              <a
                href="http://perrylzx.github.io/to-do-list"
                className="card-link"
              >
                Here
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">pitch-booker</h5>
              <p className="card-text">A pitch booker app.</p>
              <a
                href="https://pitch-booker.herokuapp.com/"
                className="card-link"
              >
                Here
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Instagram</h5>
              <p className="card-text">An image sharing app.</p>
              <a
                href="https://kittengram-9e684.firebaseapp.com/"
                className="card-link"
              >
                Here
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
