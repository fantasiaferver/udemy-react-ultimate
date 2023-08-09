import React from "react";

class MyComponent extends React.Component {
    //JSX
    state = {
        firtsName: 'Chinh',
        age: 22,
        sex: 'male'
    }
    handleClick(event) {
        console.log(event)
    }
    handleMouseOver(event) {
        console.log(event)
    }
    render() {
        return (
            <div>My name is: {this.state.firtsName}
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;