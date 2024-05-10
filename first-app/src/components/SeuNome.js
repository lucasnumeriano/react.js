export default function SeuNome({ setName }) {
    return (
        <>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)}></input>
        </>
    )
}