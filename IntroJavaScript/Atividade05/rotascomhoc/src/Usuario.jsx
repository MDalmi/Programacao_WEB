import withAuth from "./withAuth";

const Usuario = () => {
    return (
        <>
            <h1>Dados do usuário</h1>
            <h2>Nome: {localStorage.getItem("usuario")}</h2>
        </>
    )
}

export default withAuth(Usuario);