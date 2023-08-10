import React from 'react'
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleHideShow = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props
        return (
            //props
            <div>
                <div>
                    <span onClick={() => { this.handleHideShow() }}>{this.state.isShowListUser === false ? 'Show list user' : "Hide list user"}</span>
                </div>
                {this.state.isShowListUser && <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                <div>Id: {user.id}</div>
                                <div>Name: {user.firstName}</div>
                                <div>Age: {user.age}</div>
                                <hr />
                            </div>
                        )
                    })}
                </div>}

            </div>
        )
    }
}
export default DisplayInfor