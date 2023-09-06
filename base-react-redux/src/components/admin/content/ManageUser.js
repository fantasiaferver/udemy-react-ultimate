import ModalCreateUser from './ModalCreateUser';
import '../../../style/ManageUser.scss'
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from 'react';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="user-content">
                <div className='btn-add-new'>
                    <button className='btn btn-dark'
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <AiFillPlusCircle />
                        Add new user
                    </button>
                </div>
                <div className='table-users-container'>
                    table user
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}
export default ManageUser