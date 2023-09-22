import { useEffect, useState } from "react"
// import { getAllUsers } from "../../../services/apiService";
import { AiTwotoneEdit, AiFillDelete, AiOutlineFileText } from "react-icons/ai";


const TableUser = (props) => {
    const { listUsers } = props
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (<tr key={`table-user-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.username === '' ? "Unknow name" : item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button
                                        type="button"
                                        title="Show"
                                        class="btn btn-outline-dark"
                                        onClick={() => props.handleClickBtnView(item)}
                                    ><AiOutlineFileText /></button>
                                    <button
                                        type="button" title="Edit"
                                        className="btn btn-outline-dark"
                                        onClick={() => props.handleClickBtnUpdate(item)}><AiTwotoneEdit /></button>
                                    <button type="button" title="Delete" className="btn btn-outline-dark"><AiFillDelete /></button>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not found user data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default TableUser