
import './App.css';
import Placar from './components/Placar'
import Jankenpon from './components/Jankenpon'
import Button from './components/Button'
import Resultado from './components/Resultado'
import { useState, useEffect } from 'react';

function App() {

  const [placarPlayer, setPlacarPlayer] = useState(0)
  const [placarMachine, setPlacarMachine] = useState(0)
  const [rodada, setRodada] = useState(0)

  

  const [player, setPlayer] = useState('')
  const [machine, setMachine] = useState('')
  const [winner, setWinner] = useState('')
  const [disab, setDisab] = useState(false)


  const setJankenpon = (jankenpon) =>{
    
    const random = getRandomInt(0,3)
    let mach = ''
    setPlayer(`${jankenpon}`)
    setDisab(true)
    setRodada(rodada + 1)
    
      switch (random){
        case 0:
          setMachine('pedra')
          mach = 'pedra'
          break;
        case 1:
          setMachine('papel')
          mach = 'papel'
          break;
        case 2:
          setMachine('tesoura')
          mach = 'tesoura'
          break;     
        default:
      }

    return [jankenpon, mach]
  }

  useEffect((_,Prev) => {
    if(player || machine){
      setTimeout(() => {
        setWinner(getWinner())
        console.log(rodada)
      }, 700);
    }

    
  }, [player]);

  const handleClick = (jankenpon) =>{

    setJankenpon(jankenpon)
  }

  const handlePlayAgain = () =>{
    setDisab(false)
    setWinner('')

    if(player !== ''){
      
        setPlayer('')
      
      
    }

    if(machine !== ''){
      
        setMachine('')
     
      
    }
  }

  const getWinner = () =>{

    console.log(player)
    console.log(machine)

    if(player === machine){
      return 'empate'
    }

    if(player === 'tesoura'){
      if(machine === 'papel'){
        setPlacarPlayer(placarPlayer + 1)
        
        return 'JOGADOR'
      } else {
       
        setPlacarMachine(placarMachine +1)
        return 'MÁQUINA'
      }
    }

    if(player === 'papel'){
      if(machine === 'pedra'){
        setPlacarPlayer(placarPlayer + 1)
        
        return 'JOGADOR'
      } else {
        setPlacarMachine(placarMachine +1)
        
        return 'MÁQUINA'
      }
    }

    if(player === 'pedra'){
      if(machine === 'tesoura'){
        setPlacarPlayer(placarPlayer + 1)
       
        return 'JOGADOR'
      } else {
        setPlacarMachine(placarMachine +1)
       
        return 'MÁQUINA'
      }
    }

  

  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="App">
      <header className="App-header">

      <Placar placarPlayer={placarPlayer} placarMachine={placarMachine}/>
      

      {
        winner ? <Resultado handle={handlePlayAgain} winner={winner}/> : <Jankenpon player={player} machine={machine}/>
      }
        
        <div className='buttons'>
          <Button disab={disab} handle={handleClick} jankenpon='pedra'>Pedra</Button>          
          <Button disab={disab} handle={handleClick} jankenpon='papel'>Papel</Button>          
          <Button disab={disab} handle={handleClick} jankenpon='tesoura'>Tesoura</Button>     
           
        </div>
      </header>
    </div>
  )
}

export default App;
