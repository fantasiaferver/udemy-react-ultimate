import React from "react";
import logo from './../logo.svg'
import './../style/AddUserInfor.scss'
class AddUserInfor extends React.Component {
    state = {
        firstName: '',
        age: '',
        sex: ''
    }
    handleOnChangeInput = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + '-random',
            name: this.state.firstName,
            age: this.state.age
        })
    }
    render() {
        return (
            <div className="contain-add-user">My name is {this.state.firstName} and my age is {this.state.age}
                <form
                    onSubmit={(event) => this.handleOnSubmitForm(event)}>
                    <label>Your name</label>
                    <input type="text"
                        value={this.state.firstName}
                        placeholder="Ex: Johny Dark"
                        onChange={(event) => this.handleOnChangeInput(event)}>
                    </input>
                    <label>Your age</label>
                    <input type="number"
                        value={this.state.age}
                        placeholder="Ex: 18"
                        onChange={(event) => this.handleOnChangeInputAge(event)}>
                    </input>
                    <button
                    >Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserInfor;