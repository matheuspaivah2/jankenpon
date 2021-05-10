import './styles.css'
const Placar = () =>{
    return(
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
    )
}

export default Placar;