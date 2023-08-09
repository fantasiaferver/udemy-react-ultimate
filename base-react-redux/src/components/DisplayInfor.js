import React from 'react'
class DisplayInfor extends React.Component {
    render() {
        const { firstName, age } = this.props
        return (
            //props
            <div>
                {/* <div>My name is: {this.props.firstName}</div>
                <div>My age is: {this.props.age}</div> */}
                <div>My name is: {firstName}</div>
                <div>My age is: {age}</div>
            </div>
        )
    }
}
export default DisplayInfor