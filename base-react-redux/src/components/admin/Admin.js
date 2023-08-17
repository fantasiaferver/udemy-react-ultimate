import SideBar from "./SideBar"
import '../../style/Admin.scss'
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
const Admin = () => {
    const [collapsed, setCollapse] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => { setCollapse(!collapsed) }} />
                content admin
            </div>
        </div>
    )
}

export default Admin