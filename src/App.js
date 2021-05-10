import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='placar'>
          <div className='placarPlayer'>
            <span>0</span>
            <p>Jogador</p>
          </div>
          <label>Placar</label>
          <div className='placarMaquina'>
            <span>0</span>
            <p>Maquina</p>
          </div>
        </div>

        <div className='jankenpon'>
          <div className='janMaquina'>
            <p>Máquina</p>
            <p></p>
          </div>
          <div className='janPlayer'>
            <p>Jogador</p>
            <p></p>
          </div>
        </div>


        <div className='buttons'>
          <button>Pedra</button>
          <button>Papel</button>
          <button>Tesoura</button>
        </div>
      </header>
    </div>
  );
}

export default App;
