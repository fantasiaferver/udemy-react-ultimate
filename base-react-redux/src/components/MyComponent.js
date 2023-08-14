import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, firstName: "Chinh", age: 17 },
//             { id: 2, firstName: "Vu", age: 35 },
//             { id: 3, firstName: "Hieu", age: 23 }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id != userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {

//         return (
//             <>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                 <br />
//                 <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         )
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, firstName: "Chinh", age: 17 },
        { id: 2, firstName: "Vu", age: 35 },
        { id: 3, firstName: "Hieu", age: 21 }
    ])

    const handleAddNewUser = (userObj) => {
        const newListUser = [userObj, ...listUsers]
        setListUsers(newListUser)
    }

    const handleDeleteUser = (UserId) => {
        let ListUsersClone = listUsers
        ListUsersClone = ListUsersClone.filter(item => item.id != UserId)
        setListUsers(ListUsersClone)
    }

    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br />
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
        </>
    )
}
export default MyComponent;