import React from 'react'

class NoteInput extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      charLeft: 100,
      title:'',
      body:''
    }
    this.onCharLeftEventHandler = this.onCharLeftEventHandler.bind(this)
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onCharLeftEventHandler(event){
    this.setState(prevState =>{
      return {
        ...prevState.charLeft,

      }
    })
  }
  render(){
    return (
      <>
        <h5 className="char-remain">
          Sisa karakter:
        </h5>
        <input type="text" placeholder='title'/>
        <br />
        <input type="text" placeholder='Tuliskan catatanmu di sini...'/>
        <br />
        <button type='submit'>Buat</button>
      </>
    )
  }
  
}

export default NoteInput