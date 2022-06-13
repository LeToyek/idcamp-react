import React from 'react'

class ControlledComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        }
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this)
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)

    }
    
    onNameChangeEventHandler(event){
        this.setState(prevState => {
            return {
                ...prevState,
                name: event.target.value
            }
        })
    }
    onEmailChangeEventHandler(event){
        this.setState(prevState =>{
            return{
                ...prevState,
                email: event.target.value
            }
        })
    }
    onGenderChangeEventHandler(event){
        this.setState(prevState =>{
            return{
                ...prevState,
                gender: event.target.value
            }
        })
    }
    onSubmitEventHandler(event){
        event.preventDefault()

        const message = `
            Name = ${this.state.name}
            Email = ${this.state.email}
            Gender = ${this.state.gender}
        `
        alert(message)
    }

    render(){
        return(
            <div>
                <h1>Register Form</h1>
                <form >
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
                    <br />
                    <label htmlFor="gender">Gender: </label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type='submit' onClick={this.onSubmitEventHandler}>submit</button>
                </form>
            </div>
        )
    }
}

export default ControlledComp