import styles from './Button.module.css';

export default function Button(props) {
    return <button className={styles.butaoClicavel} onClick={props.event}>{props.text}</button>
}