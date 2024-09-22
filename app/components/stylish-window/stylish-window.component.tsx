import { useState } from 'react';
import styles from './stylish-window.component.module.scss';
import { getLinesImg } from '@/app/canvas-magic/lines';
import PianoOctave from '../piano-octave/piano-octave.component';

export type StylishWindowProps = {
    title: string;
};

const StylishWindow = ({title}: StylishWindowProps) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');
    getLinesImg().then((linesImg) => {
      setBackgroundImage(linesImg);
    });
    return <section className={styles.stylishWindow}>
        <header style={{backgroundImage: `url(${backgroundImage})`}}>
            <h3>{title}</h3>
        </header>
        <section className={styles.detailsSection}>
            <span>5 items</span>
            <span>232kb in disk</span>
            <span>168k available</span>
        </section>
        <div className={styles.contents}>
            <PianoOctave></PianoOctave>
            <PianoOctave></PianoOctave>
        </div>
    </section>;
};

export default StylishWindow;