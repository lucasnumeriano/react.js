import './App.css';
import Form from './components/Form';
import Contador from './components/Contador';
import Condicional from './components/Condicional';
import List from './components/List';

export default function App() {
  const meusItens = ['Vini.Jr', 'Bellingham', 'Virtz', 'Mbappé', 'Kane', 'Rodrygo', 'Kross', 'Rudiger', 'Rodri', 'Lunin']

  return (
    <div className="App">
      <h1>Forulários</h1>
      <Form />
      <Contador />
      <Condicional />
      <List itens={meusItens}/>
      <List itens={[]}/>
    </div>
  );
}