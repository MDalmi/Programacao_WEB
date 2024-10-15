import { useState, useEffect } from "react";
import "./calculo.css"
function Calculos() {

    const [calculos, setCalculos] = useState([]);
    const [nome, setNome] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");


    const criarCalculo = async () => {
        await fetch('http://localhost:3002/calculo',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "nome": nome,
                    "altura": altura,
                    "peso": peso            
                })
            }
        ).then(response => response.json())
            .then(json => {
                alert(json);
                pegaCalculos();
                setAltura("");
                setPeso("")
                setNome("");
    
            })
    }


    const pegaCalculos = async () => {
        await fetch('http://localhost:3002/calculo')
            .then(response => response.json())
            .then(json => setCalculos(json))
    }

    const remover = async index => {
        if (window.confirm('Deseja remover o calculo?')) {
            await fetch(`http://localhost:3002/calculo/${index}`,
                {
                    method: "DELETE"
                }
            ).then(response => response.json())
                .then(json => alert(json));
            pegaCalculos();
        }
    }

    useEffect(() => {
        pegaCalculos();
    }, [])


    return (
        <>
            <div style={{textAlign : "center"}}>
                <h1>Cálculos</h1>
                <div>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={nome}
                            onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Altura:</label>
                        <input type="number" value={altura}
                            onChange={e => setAltura(e.target.value)} />
                    </div>
                    <div>
                        <label>Peso:</label>
                        <input type="number" value={peso}
                            onChange={e => setPeso(e.target.value)} />
                    </div>
                    <button onClick={criarCalculo}>Calcula IMC</button>
                </div>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Remover</th>
                    </tr>
                    {
                        calculos.map((calculo, index) => (
                            <tr key={index}>
                                <td>{calculo.nome}</td>
                                <td>{calculo.altura}</td>
                                <td>{calculo.peso}</td>
                                <td>{calculo.valor_IMC}</td>
                                <td>{calculo.classificacao}</td>
                                <td><button onClick={() => remover(index)}>
                                    Remover - {index}
                                </button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    )
}

export default Calculos;