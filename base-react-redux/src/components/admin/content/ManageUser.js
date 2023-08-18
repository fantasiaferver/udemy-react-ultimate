import ModalCreateUser from './ModalCreateUser';

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="user-content">
                <div>
                    <button>Add new user</button>
                    <ModalCreateUser />
                </div>
                <div>
                    table user
                </div>
            </div>
        </div>
    )
}
export default ManageUser