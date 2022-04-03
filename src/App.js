
import './App.css';
import MainTitle from './components/MainTitle';
import Clock from './components/Clock/Clock'
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
function App() {
  return (
    <div className="App">
      <MainTitle main_title="LifeCycle"></MainTitle>
      <h3> Exemplo de relogio que o proprio react usa de exemplo</h3>
      <Clock></Clock>
      <h3>Meu componente inspirado no exemplos</h3>
      <CountdownTimer seconds={5} ></CountdownTimer>
    </div>
  );
}

export default App;
