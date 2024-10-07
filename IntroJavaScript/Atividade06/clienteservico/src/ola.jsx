import { useState } from "react";

function Ola() {

    const [mensagem, setMensagem] = useState("");

    const getOla = async () => {
        await fetch('http://localhost:3002/')
            .then(response => response.json())
            .then(json => setMensagem(json))
            .catch(err => setMensagem("Erro: " + err))
    }

    return (
        <>
            <h1> Mensagem da API: {mensagem} </h1>
            <br />
            <button onClick={() => getOla()}>
                Chamar API
            </button>
        </>
    )

}

export default Ola