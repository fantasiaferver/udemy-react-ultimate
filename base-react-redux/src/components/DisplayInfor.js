import React from 'react'
// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true
//     }
//     handleHideShow = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
//     render() {
//         console.log('call me render')
//         const { listUsers, handleDeleteUser } = this.props
//         return (
//             //props
//             <div>
//                 <div>
//                     <span style={{ fontWeight: 'bold' }} onClick={() => { this.handleHideShow() }}>{this.state.isShowListUser === false ? 'Show list user' : "Hide list user"}</span>
//                 </div>
//                 <br />
//                 {this.state.isShowListUser && <div>
//                     {listUsers.map((user) => {
//                         return (
//                             <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                 <div>Id: {user.id}</div>
//                                 <div>Name: {user.firstName}</div>
//                                 <div>Age: {user.age}</div>
//                                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                 <hr />
//                             </div>
//                         )
//                     })}
//                 </div>}

//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers, handleDeleteUser } = props
    return (
        //props
        <div>
            <br />
            {true && <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                            <div>Id: {user.id}</div>
                            <div>Name: {user.firstName}</div>
                            <div>Age: {user.age}</div>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
export default DisplayInfor