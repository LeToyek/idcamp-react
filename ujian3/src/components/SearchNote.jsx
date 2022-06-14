import React from "react";

class SearchNote extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            search:''
        }
        this.onSearchEvent = this.onSearchEvent.bind(this)
        this.onSubmitEvent = this.onSubmitEvent.bind(this)
    }
    onSearchEvent(event){
        this.setState(prevState =>{
            return{
                ...prevState,
                search: event.target.value
            }
        })
    }
    onSubmitEvent(event){
        event.preventDefault()
        this.props.searchNote(this.state.search)
        console.log(this.state.search);
    }
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <br />
        <input type="text" id="searchBar" onChange={this.onSearchEvent} value={this.state.search} />
        <br />
        <button onClick={this.onSubmitEvent}>search</button>
      </div>
    );
  }
}

export default SearchNote;
