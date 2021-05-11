import './styles.css'

const Placar = ({placarPlayer, placarMachine}) =>{
    return(
    <div className='placar'>
        <div className='placarPlayer'>
          <span>{placarPlayer}</span>
          <p>Jogador</p>
        </div>
        <label>Placar</label>
        <div className='placarMaquina'>
          <span>{placarMachine}</span>
          <p>Maquina</p>
        </div>
      </div>
    )
}

export default Placar;