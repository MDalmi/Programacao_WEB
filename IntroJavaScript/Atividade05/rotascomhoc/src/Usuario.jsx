import withAuth from "./withAuth";

const Usuario = () => {
    return (
        <>
            <h1 style={{marginLeft : "100px" , marginTop : "20px"}}>Dados do usuário</h1>
            <h2 style={{marginLeft : "100px"}}>Nome: {localStorage.getItem("usuario")}</h2>
        </>
    )
}

export default withAuth(Usuario);