import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        this.state = {
            listUsers: [
                { id: 1, firstName: "Chinh", age: 17 },
                { id: 2, firstName: "Vu", age: 35 },
                { id: 3, firstName: "Hieu", age: 23 }
            ]
        }
        return (
            <div>
                <UserInfor />
                <br />
                <hr />
                <DisplayInfor listUsers={this.state.listUsers} />

            </div>
        )
    }
}

export default MyComponent;