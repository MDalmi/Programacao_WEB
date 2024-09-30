import { NavLink, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <NavLink exact="true" to="/" className="navbar-brand">React com Rotas</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact="true" to="/" className="nav-link active">Home</NavLink>
                            <NavDropdown title="Ações" id="basic-nav-dropdown">
                                <NavLink exact="true" to="/rotas" className="dropdown-item">Rotas</NavLink>
                                <NavLink exact="true" to="/rotas/2024" className="dropdown-item">Rotas com parâmetros</NavLink>
                            </NavDropdown>
                            <NavLink exact="true" to="/sobre" className="nav-link active">Sobre</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Menu;
