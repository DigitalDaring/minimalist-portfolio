import { useEffect, useState } from 'react';
import styles from './stylish-window.component.module.scss';
import { getLinesImg } from '@/app/canvas-magic/lines';
import PropTypes from 'prop-types';

export type StylishWindowProps = {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    content: PropTypes.ReactElementLike
};

const StylishWindow = ({title, subtitle1, subtitle2, subtitle3, content}: StylishWindowProps) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');
    useEffect(() => {
        getLinesImg().then((linesImg) => {
            setBackgroundImage(linesImg);
        });
    }, []);
    
    return <section className={styles.stylishWindow}>
        <header style={{backgroundImage: `url(${backgroundImage})`}}>
            <h3>{title}</h3>
        </header>
        <section className={styles.detailsSection}>
            <span>{subtitle1}</span>
            <span>{subtitle2}</span>
            <span>{subtitle3}</span>
        </section>
        <div className={styles.contents}>
            {content}
        </div>
    </section>;
};

export default StylishWindow;