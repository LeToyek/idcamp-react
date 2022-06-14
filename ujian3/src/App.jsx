import React from "react";
import NoteInput from "./components/NoteInput";
import Notes from "./components/Notes";
import SearchNote from "./components/SearchNote";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchResult: []
    };
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this)
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this)
    this.onSearchNoteEventHandler =this.onSearchNoteEventHandler.bind(this)
  }
  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          { id: +new Date(), title, body, archived: false, createdAdd: +new Date() },
        ],
      };
    });
  }
  onSearchNoteEventHandler(search){
    let result = []
    if (search !== '') {
      result = this.state.notes.filter(note => note.title === search)
    }
    this.setState(prevState =>({
      ...prevState,
      searchResult: result
    }))
  }
  onDeleteNoteEventHandler(id){
    const newNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes: newNotes})
  }
  onArchiveNoteEventHandler(id){
    let result = this.state.notes.map(note => {
      if (note.id !== id) return note
      return {
        ...note,
        archived: !note.archived
      }
    })
    
    this.setState(prev => ({...prev, notes: result}))
  }

  render() {
    const {searchResult, notes} = this.state
    return (
      <>
        <NoteInput addNote={this.onAddNoteEventHandler}/>
        
        <SearchNote searchNote={this.onSearchNoteEventHandler}/>
        <Notes notes={searchResult.length > 0 ? searchResult : notes}
        onDelete={this.onDeleteNoteEventHandler} 
        onArchive={this.onArchiveNoteEventHandler}/>

      </>
    );
  }
}

export default App;
