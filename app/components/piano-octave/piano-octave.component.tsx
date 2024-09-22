import { getDarkDitheringImg, getLightDitheringImg2, getLightDitheringImg3 } from '@/app/canvas-magic/dithering';
import styles from './piano-octave.component.module.scss';
import { useState } from 'react';
const PianoOctave = () => {

    const whiteC = [styles.white, styles.whiteC].join(' ');
    const blackCs = [styles.black, styles.blackCs].join(' ');
    const whiteD = [styles.white, styles.whiteD].join(' ');
    const blackDs = [styles.black, styles.blackDs].join(' ');
    const whiteE = [styles.white, styles.whiteE].join(' ');
    const whiteF = [styles.white, styles.whiteF].join(' ');
    const blackFs = [styles.black, styles.blackFs].join(' ');
    const whiteG = [styles.white, styles.whiteG].join(' ');
    const blackGs = [styles.black, styles.blackGs].join(' ');
    const whiteA = [styles.white, styles.whiteA].join(' ');
    const blackAs = [styles.black, styles.blackAs].join(' ');
    const whiteB = [styles.white, styles.whiteB].join(' ');

    const [darkBackground, setDarkBackground] = useState<string>('');
    const [lightBackground, setLightBackground] = useState<string>('');

    getDarkDitheringImg().then((img) => {
        setDarkBackground(img);
    });

    getLightDitheringImg2().then((img) => {
        setLightBackground(img);
    });

    return  <div className={styles.pianoStack}>
                <div className={styles.whiteOctave}>
                    <div className={whiteC} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteD} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteE} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteF} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteG} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteA} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteB} style={{backgroundImage: `url(${lightBackground})`}}></div>
                </div>
                <div className={styles.blackOctave}>
                    <div className={blackCs} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackDs} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackFs} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackGs} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackAs} style={{backgroundImage: `url(${darkBackground})`}}></div>
                </div>
            </div>
};

export default PianoOctave;
