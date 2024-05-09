export default function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou!')
    }
    return (
        <>
            <form>
                <div><input type="text" placeholder="digite seu nome"></input></div>
                <div><input type="password" placeholder="digite sua senha"></input></div>
                <div><input type="submit" value="cadastrar" onClick={cadastrarUsuario}></input></div>
            </form>
        </>
    )
}