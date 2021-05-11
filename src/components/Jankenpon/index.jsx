import './styles.css'
const Jankenpon = ({player, machine}) =>{
    return(
        <div className='jankenpon'>
          <div className='janMaquina'>
            <p className='player'>Máquina</p>
            <span className='jan'>{machine}</span>
          </div>
          <div className='janPlayer'>
            <p className='player'>Jogador</p>
            <span className='jan'>{player}</span>
          </div>
        </div>
    )
}

export default Jankenpon;