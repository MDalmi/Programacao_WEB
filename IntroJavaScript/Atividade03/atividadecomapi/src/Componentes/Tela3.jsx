/*
Após se clicar em concluir deve ser exibida uma tela com o
nome e telefone da pessoa, seu salário bruto, o valor pago de INSS e o valor do
salário líquido.
*/

import { useContext } from "react";
import AppContext from "../AppContext";
import "./Telas.css"


export default function Tela3() {

    const { nome, telefone, salario, salarioliq, valorPagINSS } = useContext(AppContext);

    return (
        <>
            <div className="container"> 
                <h2>Dados da Trabalho Calculados</h2>
                <div className="form-group">
                    <label>
                        Nome
                        <input
                            value={nome} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Telefone
                        <input
                            value={telefone} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Salário Bruto
                        <input
                            type="double" value={salario} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Valor Pago ao INSS
                        <input
                            type="number" value={valorPagINSS} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Salário Líquido
                        <input
                            value={salarioliq} readOnly
                        />
                    </label>
                    <br />
                </div>
            </div>
        </>
    )
}
