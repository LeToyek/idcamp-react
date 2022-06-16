import React from "react";
import { getInitialData, showFormattedDate } from "./utils";
import NoteInput from "./components/NoteInput";
import Notes from "./components/Notes";
import SearchNote from "./components/SearchNote";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchResult: [],
    };
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
  }
  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      const date = +new Date()
      return {
        notes: [
          ...prevState.notes,
          {
            id: date,
            title,
            body,
            createdAt: showFormattedDate(date),
            archived: false,
          },
        ],
      };
    });
    
  }
  onSearchNoteEventHandler(search) {
    let result = [];
    if (search !== "") {
      result = this.state.notes.filter((note) => note.title.toLowerCase() === search.toLowerCase());
    }
    this.setState((prevState) => ({
      ...prevState,
      searchResult: result,
    }));
  }
  onDeleteNoteEventHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }
  onArchiveNoteEventHandler(id) {
    let result = this.state.notes.map((note) => {
      if (note.id !== id) return note;
      return {
        ...note,
        archived: !note.archived,
      };
    });

    this.setState((prev) => ({ ...prev, notes: result }));
  }

  render() {
    const { searchResult, notes } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Buat Catatan</h1>
          <NoteInput addNote={this.onAddNoteEventHandler} />

          <SearchNote searchNote={this.onSearchNoteEventHandler} />
          <Notes
            notes={searchResult.length > 0 ? searchResult : notes}
            onDelete={this.onDeleteNoteEventHandler}
            onArchive={this.onArchiveNoteEventHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
