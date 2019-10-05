import React, { Component } from "react";
import Card from "../../components/Card";
// import styles from "./Kanban.module.css";

class Kanban extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.cards.map(card => {
          return (
            <span key={card.title}>
              <Card
                title={card.title}
                body={card.body}
                priority={card.priority}
                created_by={card.created_by}
                assigned_to={card.assigned_to}
              />
            </span>
          );
        })}
      </ul>
    );
  }
}

export default Kanban;
