import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Todo Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home" className='nav-link'>Home</NavLink>
                            <NavLink to="/users" className='nav-link'>User</NavLink>
                            <NavLink to="/admins" className='nav-link'>Admin</NavLink>
                            {/* <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <Nav.Link href="/admins">Admin</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <NavDropdown title="Settings" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Logout
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    More
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Header;