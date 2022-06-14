import React from 'react'
import "../index.css"

class NoteInput extends React.Component{
  maxLimit = 50;
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
    if (event.target.value.length > 50) {
      return
    }
    this.setState(prevState =>{
      return{
        ...prevState,
        title: event.target.value,
        charLeft: this.maxLimit-event.target.value.length
      }
    })
  }
  onBodyChangeEventHandler(event){
    
    this.setState(
      prevState =>{
      return{
        ...prevState,
        body: event.target.value,
        
      }
    })
  }
  onSubmitEventHandler(event){
    event.preventDefault()
    this.props.addNote(this.state)
  }
  render(){
    return (
      <div className='input-note'>
        <h5 className="char-remain" value>
          Sisa karakter: {this.state.charLeft}
        </h5>
        <input type="text" placeholder='title' className='title-input' 
        onChange={this.onTitleChangeEventHandler} value={this.state.title}/>
        <br />
        <textarea type="text" placeholder='Tuliskan catatanmu di sini...'
        onChange={this.onBodyChangeEventHandler} value={this.state.body}/>
        <br />
        <button type='submit' className='btn-submit'
        onClick={this.onSubmitEventHandler}>Buat</button>
      </div>
    )
  }
  
}

export default NoteInput