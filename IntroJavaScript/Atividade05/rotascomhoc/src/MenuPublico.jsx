import { NavLink, Outlet } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuPublico = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <NavLink exact="true" to="/" className="navbar-brand">React com Rotas</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact="true" to="usuario" className="nav-link active">Usuario</NavLink>
                            <NavLink exact="true" to="login" className="nav-link active">Logout</NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default MenuPublico;