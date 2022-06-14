import React from "react";
import "../index.css";

class SearchNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearchEvent = this.onSearchEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }
  onSearchEvent(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });
  }
  onSubmitEvent(event) {
    event.preventDefault();
    this.props.searchNote(this.state.search);
    console.log(this.state.search);
  }
  render() {
    return (
      <div className="search-bar">
        <div className="field">
          <input
            type="text"
            onChange={this.onSearchEvent}
            value={this.state.search}
          />
          <button onClick={this.onSubmitEvent}>search</button>
        </div>
      </div>
    );
  }
}

export default SearchNote;
