import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      bodyInput: "",
      priorityInput: "",
      createdByInput: "",
      assignedToInput: ""
    };
  }

  handleTitleInput = e => {
    const { value } = e.target;
    this.setState({ titleInput: value });
  };

  handleBodyInput = e => {
    const { value } = e.target;
    this.setState({ bodyInput: value });
  };

  handlePriorityInput = e => {
    const { value } = e.target;
    this.setState({ priorityInput: value });
  };

  handleCreatedByInput = e => {
    const { value } = e.target;
    this.setState({ createdByInput: value });
  };

  handleAssignedToInput = e => {
    const { value } = e.target;
    this.setState({ assignedToInput: value });
  };

  handleSubmitTask = () => {
    const {
      titleInput,
      bodyInput,
      priorityInput,
      createdByInput,
      assignedToInput
    } = this.state;
    this.props.addTask({
      title: titleInput,
      body: bodyInput,
      priority: priorityInput,
      created_by: createdByInput,
      assigned_to: assignedToInput
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.titleInput}
            onChange={this.handleTitleInput}
            placeholder="Title"
          />
        </div>

        <div>
          <input
            type="text"
            value={this.state.bodyInput}
            onChange={this.handleBodyInput}
            placeholder="Body"
          />
        </div>

        <div>
          <input
            type="text"
            value={this.state.priorityInput}
            onChange={this.handlePriorityInput}
            placeholder="Priority"
          />
        </div>

        <div>
          <input
            type="text"
            value={this.state.createdByInput}
            onChange={this.handleCreatedByInput}
            placeholder="Created by"
          />
        </div>

        <div>
          <input
            type="text"
            value={this.state.assignedToInput}
            onChange={this.handleAssignedToInput}
            placeholder="Assign to"
          />
        </div>

        <div>
          <button onClick={this.handleSubmitTask}> Submit New Task</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
