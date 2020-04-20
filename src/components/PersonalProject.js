import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PersonalProject.css";
import goggle from "./pictures/goggle.png";
import instagram from "./pictures/instagram.png";
import pitchbooker from "./pictures/pitchbooker.png";
import todolist from "./pictures/todolist.png";

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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={goggle} />
            <Card.Body>
              <Card.Title>Clone of Google Search</Card.Title>
              <Card.Text>
                A clone of the google search page for my first project.
              </Card.Text>
              <Button
                variant="primary"
                href="http://perrylzx.github.io/google-clone"
              >
                Here
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={todolist} />
            <Card.Body>
              <Card.Title>Todolist</Card.Title>
              <Card.Text>A todolist made in react and redux.</Card.Text>
              <Button
                variant="primary"
                href="http://perrylzx.github.io/to-do-list"
              >
                Here
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pitchbooker} />
            <Card.Body>
              <Card.Title>pitch-booker</Card.Title>
              <Card.Text>A pitch booker app.</Card.Text>
              <Button
                variant="primary"
                href="https://pitch-booker.herokuapp.com"
              >
                Here
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={instagram} />
            <Card.Body>
              <Card.Title>Instagram</Card.Title>
              <Card.Text>An image sharing app.</Card.Text>
              <Button
                variant="primary"
                href="https://kittengram-9e684.firebaseapp.com/"
              >
                Here
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
