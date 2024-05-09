import styles from './List.module.css';

export default function List({ itens }) {
    return (
        <>
            <h3>Melhores do Mundo</h3>
            <ol className={styles.list}>
                {itens.length > 0 ? (
                    itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))) : (
                    <p>Não a itens na lista.</p>
                )}
            </ol>
        </>
    )
}