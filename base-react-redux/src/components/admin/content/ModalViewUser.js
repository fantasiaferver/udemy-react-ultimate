import { isValidElement, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiService';
import _ from 'lodash'

const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUserName("");
        setRole("USER");
        setPreviewImage("");
        props.resetUdateData();
        setShow(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        // console.log('run use effect')
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email);
            setUserName(dataView.username);
            setPassword(dataView.password)
            setRole(dataView.role);
            setImage("");
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView])

    // console.log('check data update:', dataView)
    return (
        <>
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Infor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className='col-md-12 img-previews'>
                            {previewImage ?
                                <img src={previewImage} />
                                : <span> No image </span>
                            }
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <p>{email}</p>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <p>*************</p>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User name</label>
                            <p>{userName}</p>

                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <p>{role}</p>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser