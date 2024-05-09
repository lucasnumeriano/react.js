import './App.css';
import Form from './components/Form';
import Contador from './components/Contador';
import Condicional from './components/Condicional';

export default function App() {
  return (
    <div className="App">
      <h1>Forulários</h1>
      <Form />
      <Contador />
      <Condicional />
    </div>
  );
}