import React from "react";

class MyComponent extends React.Component {
    //JSX
    state = {
        firtsName: 'Chinh',
        age: 22,
        sex: 'male'
    }
    render() {
        return (
            <div>My name is: {this.state.firtsName}
                my age is : {this.state.age}
            </div>
        )
    }
}

export default MyComponent;