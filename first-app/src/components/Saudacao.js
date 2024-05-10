export default function Saudacao({ name }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tranks?`
    }

    return <>{name ? <p>{gerarSaudacao(name)}</p> : <p>Nome não informado</p>}</>
}