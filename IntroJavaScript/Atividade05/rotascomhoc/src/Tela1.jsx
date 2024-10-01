import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import AppContext from "../AppContext";
//import "./Telas.css";

export default function Tela1() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/privado/tela2', { state: { nome, telefone } });
    };

    const handleTelefoneChange = (e) => {
        const valor = e.target.value;

        // Verifica se o valor contém apenas números e tem no máximo 9 caracteres
        if (/^\d*$/.test(valor) && valor.length <= 9) {
            setTelefone(valor);
        }
    };

    return (
        <>
            <div className="container">
                <h2> Dados Pessoais </h2>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        type="text"
                        value={telefone}
                        onChange={handleTelefoneChange}
                    />
                </div>
                <button onClick={handleNavigate}>Avançar</button>
            </div>
        </>

    )

}

