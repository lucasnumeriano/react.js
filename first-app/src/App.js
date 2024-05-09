import './App.css';
import HelloWorld from './components/HelloWorld';
import SeyMyName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

export default function App() {
  return (
    <div className="App">
      <Frase />
      <h1>Olá React!</h1>
      <HelloWorld />
      <SeyMyName 
        nome="Lucas" 
        frase="Suave?"
      />
      <Pessoa 
        nome="Alfredo Jr"
        idade="22"
        profissao="Programador"
      />
      <List />
    </div>
  );
}