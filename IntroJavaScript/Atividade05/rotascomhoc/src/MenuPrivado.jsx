import { NavLink, Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css"

const MenuPrivado = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <NavLink exact="true" to="/privado" className="navbar-brand">React com Rotas</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact="true" to="/privado" className="nav-link active">HOME</NavLink> 
                            <NavLink exact="true" to="usuario" className="nav-link active">Usuario</NavLink>
                            <NavLink exact="true" to="login" 
                            className="nav-link active" >
                                {localStorage.getItem("usuario")} - Logout
                                </NavLink>
                                <NavLink exact="true" to="tela1" className="nav-link active">Tela da Atividade</NavLink>
                                 {/*<NavLink exact="true" to="tela2" className="nav-link active">Tela 2</NavLink>
                                <NavLink exact="true" to="tela3" className="nav-link active">Tela 3</NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default MenuPrivado;