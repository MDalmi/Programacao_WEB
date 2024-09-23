import { useState } from "react";
import Tela1 from "./Componentes/Tela1";
import Tela2 from "./Componentes/Tela2";
import AppContext from "./AppContext";


function App() {

  const [tela, setTela] = useState(0);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horas, setHoras] = useState(0);
  const [valorhora, setValorHora] = useState(0);
  const [salario, setSalario] = useState(0);

  /*
    Crie uma aplicação React, utilizando a Context API para compartilhar estados e
    métodos. A aplicação deve ser capaz de receber o nome de uma pessoa e seu
    telefone, bem como a quantidade de horas que trabalha por semana e o valor
    recebido por hora. Deve ser calculado o valor do salário considerando a
    quantidade de horas por semana, o valor da hora e o mês comercial que tem 5
    semanas. Exemplo:
  */

  const calculaSalario = () => {
    setSalario(Number((horas)* Number(valorhora)) * 5);

  }

  const [tipo, setTipo] = useState(false)

  const avancarTela = () => setTela(tela + 1);
  const concluir = () => setTela(tela + 1);

  return (
    <AppContext.Provider value={
  { nome, setNome,  telefone, setTelefone,  horas, setHoras,  valorhora, setValorHora, salario, calculaSalario}
    }>
<div>
      {/* Tela Inicial */}
      {tela === 0 && (
        <div>
          <h1>Bem-vindo!</h1>
          <button onClick={avancarTela}>INICIAR PROCESSO</button>
        </div>
      )}

      {/* Tela 1: Nome e Telefone */}
      {tela === 1 && (
        <Tela1/>
      )}

      {/* Tela 2: Valor da Hora e Horas Trabalhadas */}
      {tela === 2 && (
        <Tela2/>
      )}

    
    </div>      
    </AppContext.Provider>
  );
}

export default App;
