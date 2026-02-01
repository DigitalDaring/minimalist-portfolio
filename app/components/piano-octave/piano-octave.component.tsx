'use client';

import { getDitheringImg1, getDitheringImg2, getDitheringImg3, getDitheringImg4 } from '@/app/canvas-magic/dithering';
import styles from './piano-octave.component.module.scss';
import { useEffect, useState } from 'react';
import { unmute } from '@/app/sound-magic/unmute';
import { Note, notes, notesArray, playFrequency } from '@/app/sound-magic/frequency-generator';

type PianoProps = {
    onKeyClicked: (key_code: string) => void
};

type PianoState = {
    readyToPlay: boolean,
    audioContext?: AudioContext,
};

const PianoOctave = ({onKeyClicked}: PianoProps) => {

    const [pianoState, setPianoState] = useState<PianoState>({
        readyToPlay: false, audioContext: undefined
    })

    const whenReadyToPlay = (audioContext: AudioContext) => {
        setPianoState({readyToPlay: true, audioContext});
    }


    useEffect(() => {
        let globalAudioContext = (window as any).globalAudioContext;
        if (globalAudioContext == null) {
            globalAudioContext = new window.AudioContext();
            (window as any).globalAudioContext = globalAudioContext;
            unmute(globalAudioContext, () => whenReadyToPlay(globalAudioContext));
        } else if (!pianoState.readyToPlay && pianoState.audioContext == null){
            whenReadyToPlay(globalAudioContext)
        }
    }, []);
    

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

    useEffect(() => {
        getDitheringImg1().then((img) => {
            setDarkBackground(img);
        });
    
        getDitheringImg3().then((img) => {
            setLightBackground(img);
        });
    }, []);

    const playNote = (note: Note) => {
        const {readyToPlay, audioContext} = pianoState;
        if (readyToPlay && audioContext != null) {
            playFrequency(note.hz, audioContext, () => {});
        }

        onKeyClicked(note.name.toUpperCase() + '3');
    }

    return  <div className={styles.pianoStack}>
                <div className={styles.whiteOctave}>
                    <div className={whiteC} onClick={() => playNote(notes.c)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteD} onClick={() => playNote(notes.d)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteE} onClick={() => playNote(notes.e)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteF} onClick={() => playNote(notes.f)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteG} onClick={() => playNote(notes.g)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteA} onClick={() => playNote(notes.a)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                    <div className={whiteB} onClick={() => playNote(notes.b)} style={{backgroundImage: `url(${lightBackground})`}}></div>
                </div>
                <div className={styles.blackOctave}>
                    <div className={blackCs} onClick={() => playNote(notes.cS)} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackDs} onClick={() => playNote(notes.dS)} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackFs} onClick={() => playNote(notes.fS)} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackGs} onClick={() => playNote(notes.gS)} style={{backgroundImage: `url(${darkBackground})`}}></div>
                    <div className={blackAs} onClick={() => playNote(notes.aS)} style={{backgroundImage: `url(${darkBackground})`}}></div>
                </div>
            </div>
};

export default PianoOctave;
