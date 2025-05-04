import { ReactNode } from 'react';
import styles from './simple-modal.component.module.scss';

export type SimpleModalProps = {
    children: ReactNode,
    isVisible: boolean,
    isClosing: boolean,
    isHuge: boolean
}

const SimpleModal = ({children, isVisible, isClosing, isHuge}: SimpleModalProps) => {

    const classes = [styles.blurBackground];
    if (isVisible) {
        classes.push(styles.visible);

        if (isClosing) {
            classes.push(styles.animateOut);
        }

        if (isHuge) {
            classes.push(styles.hugeModal);
        }
    }
    return <section className={classes.join(' ')}>
        <section className={styles.simpleModal}>
            {children}
        </section>
    </section>
    
}

export default SimpleModal;
