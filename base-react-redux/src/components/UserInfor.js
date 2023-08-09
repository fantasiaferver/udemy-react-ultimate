import React from "react";
class UserInfor extends React.Component {
    state = {
        firstName: 'Chinh',
        age: 22,
        sex: 'male'
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
        console.log(this.state)
    }
    render() {
        return (
            <div>My name is {this.state.firstName} and my age is {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmitForm(event)}>
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor;