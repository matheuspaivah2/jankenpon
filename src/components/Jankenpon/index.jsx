import './styles.css'
const Jankenpon = () =>{
    return(
        <div className='jankenpon'>
          <div className='janMaquina'>
            <p className='player'>Máquina</p>
            <span className='jan'>Pedra</span>
          </div>
          <div className='janPlayer'>
            <p className='player'>Jogador</p>
            <span className='jan'>Papel</span>
          </div>
        </div>
    )
}

export default Jankenpon;