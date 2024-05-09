import { useState } from 'react';
import Button from './Button';
import styles from './Button.module.css';

export default function Contador() {
    const [ count, setCount ] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function evento() {
        alert('Mais sei acionar eventos ;-)');
    }

    return (
        <>
            <button className={styles.butaoClicavel} onClick={handleClick}>
                Fui clicado {count} vezes!
            </button>
            <Button event={evento} text="Eu num conto meus cliques :("/>
        </>
    );
}