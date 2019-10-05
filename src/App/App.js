import React, { Component } from "react";
import styles from "./App.module.css";

import AddTask from "../containers/AddTask";
import Kanban from "../containers/Kanban";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          title: "Make Better Styles",
          body: "Task details",
          priority: "Medium",
          created_by: "Person 2",
          assigned_to: "Person 1"
        },
        {
          title: "Make More Better Styles",
          body: "More task details",
          priority: "Low",
          created_by: "Person 3",
          assigned_to: "Person 2"
        },
        {
          title: "Make Even Better Styles",
          body: "Even more task details",
          priority: "High",
          created_by: "Person 1",
          assigned_to: "Person 3"
        }
      ]
    };
  }

  addTask = ({ title, body, priority, created_by, assigned_to }) => {
    const cards = this.state.cards.concat({
      title,
      body,
      priority,
      created_by,
      assigned_to
    });
    this.setState({ cards });
  };

  render() {
    return (
      <div className={styles.App}>
        <AddTask addTask={this.addTask} />
        <Kanban cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
