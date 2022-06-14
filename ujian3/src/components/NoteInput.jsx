import React from 'react'

class NoteInput extends React.Component{
  maxLimit = 100;
  constructor(props){
    super(props)
    this.state ={
      title:'',
      body:''
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }
  onTitleChangeEventHandler(event){
    this.setState(prevState =>{
      return{
        ...prevState,
        title: event.target.value
      }
    })
  }
  onBodyChangeEventHandler(event){
    if (event.target.value.length > 100) {
      return
    }
    this.setState(
      prevState =>{
      return{
        ...prevState,
        body: event.target.value,
        charLeft: this.maxLimit-event.target.value.length
      }
    })
  }
  onSubmitEventHandler(event){
    event.preventDefault()
    this.props.addNote(this.state)
  }
  render(){
    return (
      <>
        <h5 className="char-remain" value>
          Sisa karakter: {this.state.charLeft}
        </h5>
        <input type="text" placeholder='title' 
        onChange={this.onTitleChangeEventHandler} value={this.state.title}/>
        <br />
        <input type="text" placeholder='Tuliskan catatanmu di sini...'
        onChange={this.onBodyChangeEventHandler} value={this.state.body}/>
        <br />
        <button type='submit' onClick={this.onSubmitEventHandler}>Buat</button>
      </>
    )
  }
  
}

export default NoteInput