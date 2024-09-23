import { useState } from "react";
import Classificacao from "./Classificacao";

function Corpo() {

    const [peso, setPeso] = useState(0.0);
    const [altura, setAltura] = useState(0.0);
    const [resul, setResul] = useState(0.0);
    const [resulText, setResulText] = useState("");

    const CalculaIMC = () => {


        const FinalConta = Number(peso) / Number(altura * altura);
        const FinalFinal = Math.round(FinalConta);
        setResul(FinalFinal);

        setResulText(FinalFinal < 18.5 ? 'Magreza(Grau 0)' :
            FinalFinal > 18.5 && FinalFinal < 24.9 ? 'Normal(Grau 0)' :
                FinalFinal > 25 && FinalFinal < 29.9 ? 'Obesidade(Grau I)' :
                    FinalFinal > 30 && FinalFinal < 39.9 ? 'Obesidade(Grau II)' :
                        FinalFinal > 40 ? 'Obesidade Grave(Grau III)' : 'Nenhuma Opção');



    }

    return (
        <>
            <div style={{ backgroundColor: "gray", padding: 55 }}>
                <form>
                    <div className="form-group">
                        <label>Seu Peso</label><br />
                        <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Sua Altura</label><br />
                        <input type="number" value={altura} onChange={e => setAltura(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Resultado IMC</label><br />
                        <input type="number" value={resul} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Classificação</label><br />
                        <input type="text" value={resulText} />
                    </div>
                </form>

                <div style={{ textAlign: "center" }}><br />
                    <button style={{ fontSize: 30 }} onClick={CalculaIMC}> Calcular </button>
                </div>

                <br />

                <Classificacao />

            </div>


        </>
    )
}

export default Corpo;