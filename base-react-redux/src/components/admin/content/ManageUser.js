import ModalCreateUser from './ModalCreateUser';
import '../../../style/ManageUser.scss'
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiService";
import TableUser from './TableUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers, setListUser] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [dataView, setDataView] = useState({})

    useEffect(() => {
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        setDataView(user)
    }

    const resetUdateData = () => {
        setDataUpdate({})
    }

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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUdateData={resetUdateData}
                />
                <ModalViewUser
                    setShow={setShowModalViewUser}
                    show={showModalViewUser}
                    setShowModalViewUser={setShowModalViewUser}
                    dataView={dataView}
                    resetUdateData={resetUdateData}
                />
            </div>
        </div>
    )
}
export default ManageUser