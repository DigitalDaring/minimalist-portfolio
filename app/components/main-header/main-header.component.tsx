import styles from './main-header.component.module.scss';

const MainHeader = () => {
    return <header className={styles.fixedHeader}>
        <a>About</a>
        <a>Experiments</a>
        <a>Curriculum Vitae</a>
    </header>
}

export default MainHeader;