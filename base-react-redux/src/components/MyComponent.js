import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, firstName: "Chinh", age: 17 },
            { id: 2, firstName: "Vu", age: 35 },
            { id: 3, firstName: "Hieu", age: 23 }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    render() {

        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br />
                <DisplayInfor listUsers={this.state.listUsers}
                />

            </div>
        )
    }
}

export default MyComponent;