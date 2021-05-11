import './styles.css'


const Resultado = ({handle, winner}) =>{
    return(
        <div className='container'>
            <h2>
                {
                    winner !== 'empate' ? `${winner} GANHOU` : 'EMPATE'
                }
            </h2>
            <button onClick={handle}>Jogar Novamente</button>
        </div>
    )
}

export default Resultado;