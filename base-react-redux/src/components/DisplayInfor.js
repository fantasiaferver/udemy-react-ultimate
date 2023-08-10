import React from 'react'
class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props
        return (
            //props
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>Id: {user.id}</div>
                            <div>Name: {user.firstName}</div>
                            <div>Age: {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor