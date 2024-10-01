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
                    <input type="text" value={telefone}
                        onChange={e => setTelefone(e.target.value)} />
                </div>
                <button onClick={handleNavigate}>Avançar</button>
               
                {/*Avancar tela dois*/}
            </div>
        </>

    )

}

