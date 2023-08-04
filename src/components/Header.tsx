import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logo da Rocket To Do List" />
            <h1>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </header>
    )
}