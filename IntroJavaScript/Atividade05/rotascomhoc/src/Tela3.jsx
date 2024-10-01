/*
Após se clicar em concluir deve ser exibida uma tela com o
nome e telefone da pessoa, seu salário bruto, o valor pago de INSS e o valor do
salário líquido.
*/
import { useLocation } from 'react-router-dom';

export default function Tela3() {

    const location = useLocation();
    const { nome, telefone, salariototal, salarioliquido, valorINSS } = location.state || {};

    

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
                            type="double" value={salariototal} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Valor Pago ao INSS
                        <input
                            type="number" value={salarioliquido} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Salário Líquido
                        <input
                            value={valorINSS} readOnly
                        />
                    </label>
                    <br />
                </div>
            </div>
        </>
    )
}
