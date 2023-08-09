import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor firstName="Chinh" age={22} />
                <hr />
                <DisplayInfor firstName="Vu" age={22} />
            </div>
        )
    }
}

export default MyComponent;