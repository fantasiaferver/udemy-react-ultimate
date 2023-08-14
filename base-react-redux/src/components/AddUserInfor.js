import React, { useState } from "react";
import logo from './../logo.svg'
import './../style/AddUserInfor.scss'
// class AddUserInfor extends React.Component {
//     state = {
//         firstName: '',
//         age: '',
//         sex: ''
//     }
//     handleOnChangeInput = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmitForm = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1 + '-random',
//             name: this.state.firstName,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div className="contain-add-user">My name is {this.state.firstName} and my age is {this.state.age}
//                 <form
//                     onSubmit={(event) => this.handleOnSubmitForm(event)}>
//                     <label>Your name</label>
//                     <input type="text"
//                         value={this.state.firstName}
//                         placeholder="Ex: Johny Dark"
//                         onChange={(event) => this.handleOnChangeInput(event)}>
//                     </input>
//                     <label>Your age</label>
//                     <input type="number"
//                         value={this.state.age}
//                         placeholder="Ex: 18"
//                         onChange={(event) => this.handleOnChangeInputAge(event)}>
//                     </input>
//                     <button
//                     >Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        age: '',
        sex: ''
    })

    const handleOnChangeInput = (event) => {
        const name = event.target.value
        setUser({
            ...user, firstName: name
        })
    }
    const handleOnChangeInputAge = (event) => {
        const age = event.target.value
        setUser({
            ...user, age
        })
    }
    const handleOnSubmitForm = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + '-random',
            name: user.firstName,
            age: user.age
        })
    }

    return (
        <div className="contain-add-user">My name is {user.firstName} and my age is {user.age}
            <form
                onSubmit={(event) => handleOnSubmitForm(event)}>
                <label>Your name</label>
                <input type="text"
                    value={user.firstName}
                    placeholder="Ex: Johny Dark"
                    onChange={(event) => handleOnChangeInput(event)}>
                </input>
                <label>Your age</label>
                <input type="number"
                    value={user.age}
                    placeholder="Ex: 18"
                    onChange={(event) => handleOnChangeInputAge(event)}>
                </input>
                <button
                >Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;