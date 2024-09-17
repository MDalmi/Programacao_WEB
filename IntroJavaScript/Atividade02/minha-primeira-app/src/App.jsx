import './App.css';
import Titulo from './Componentes/Titulo';
import Corpo from './Componentes/Corpo';
import Classificacao from './Componentes/Classificacao';

/*
    Crie uma aplicação React, que deverá ter um formulário para o usuário informar
    seu peso em KG e a sua altura. Será necessário um botão que quando acionado
    deve calcular o IMC da pessoa, exibindo o valor do IMC e a classificação na
    tela. Utilize o state do React para armazenar as informações necessárias. 
*/


function App() {
  return (
    <div>
      <Titulo texto="TABELA IMC"/>

      <Corpo/>

      
    </div>
  );
}

export default App;
