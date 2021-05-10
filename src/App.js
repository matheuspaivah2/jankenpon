
import './App.css';
import Placar from './components/Placar'
import Jankenpon from './components/Jankenpon'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Placar/>
      <Jankenpon />
        
        <div className='buttons'>
          <Button>Pedra</Button>          
          <Button>Papel</Button>          
          <Button>Tesoura</Button>          
        </div>
      </header>
    </div>
  );
}

export default App;
