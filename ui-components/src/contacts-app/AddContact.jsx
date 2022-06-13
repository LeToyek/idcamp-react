import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tag: "",
    };
    this.onNameChangeEventhandler = this.onNameChangeEventhandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }
  onNameChangeEventhandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }
  onTagChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <div>
        <input type="text" id="name" placeholder="name" onChange={this.onNameChangeEventhandler} value={this.state.name}/>
        <br />
        <input type="text" id="tag" placeholder="tag" onChange={this.onTagChangeEventHandler} value={this.state.tag}/>
        <br />
        <button type="submit" onClick={this.onSubmitEventHandler}>Tambah</button>
      </div>
    );
  }
}

export default AddContact;
