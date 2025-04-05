import { ReactNode } from 'react';
import styles from './simple-modal.component.module.scss';

export type SimpleModalProps = {
    children: ReactNode,
    isVisible: boolean
}

const SimpleModal = ({children, isVisible}: SimpleModalProps) => {

    const classes = [styles.simpleModal];
    if (isVisible) {
        classes.push(styles.visible);
    }

    return <section className={classes.join(' ')}>
        {children}
    </section>
    
}

export default SimpleModal;
