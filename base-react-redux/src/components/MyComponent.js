import React from "react";

class MyComponent extends React.Component {
    //JSX
    state = {
        // firstName: 'Chinh',
        age: 22,
        sex: 'male'
    }
    handleClick(event) {
        // console.log(event)
        console.log(this.state.firstName + ' ' + this.state.age)
        // console.log("random", Math.floor((Math.random() * 100) + 1))

        // this.setState({
        //     firstName: 'Pham Van Chinh',
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleMouseOver(event) {
        console.log(event)
    }
    handleOnChangeInput = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>My name is {this.state.firstName} and my age is {this.state.age}
                {/* <button onMouseOver={this.handleMouseOver}>Hover me</button> */}
                {/* <button onClick={(event) => this.handleClick(event)}>Click me</button> */}
                <form onSubmit={(event) => this.handleOnSubmitForm(event)}>
                    <input type="text"
                        placeholder="Enter your name"
                        onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;