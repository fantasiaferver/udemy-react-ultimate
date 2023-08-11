import React from 'react'
class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('call constructor: 1')
        super(props)
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('Call me did mount')
        setTimeout(() => {
            document.title = 'Welcome'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Call me did update', this.props, prevState)
        if (this.props.listUsers.length === 5) {
            alert('You got 5 users')
        }
    }

    handleHideShow = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('call me render')
        const { listUsers, handleDeleteUser } = this.props
        return (
            //props
            <div>
                <div>
                    <span style={{ fontWeight: 'bold' }} onClick={() => { this.handleHideShow() }}>{this.state.isShowListUser === false ? 'Show list user' : "Hide list user"}</span>
                </div>
                <br />
                {this.state.isShowListUser && <div>
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
}
export default DisplayInfor