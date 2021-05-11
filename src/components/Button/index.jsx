import './styles.css'

const Button = ({children, handle, jankenpon, disab}) =>{
    return(
        <button disabled={disab} onClick={() => handle(jankenpon)}>{children}</button>
    )
}

export default Button;