import { useContext } from 'react';
import styles from './clef.module.scss';
import { PageContext } from '@/app/context';
type Note = {
    name: string;
    code: string;
    isConditional: boolean;
};

const notes = [
    {name: 'C', code: 'C3', isConditional: true},
    {name: 'D', code: 'D3'},
    {name: 'E', code: 'E3'},
    {name: 'F', code: 'F3'},
    {name: 'G', code: 'G3'},
    {name: 'A', code: 'A4'},
    {name: 'B', code: 'B4'},
    {name: 'C', code: 'C4'},
    {name: 'D', code: 'D4'},
    {name: 'E', code: 'E4'},
    {name: 'F', code: 'F4'},
] as Array<Note>;

type ClefProps = {
    lastNotePlayed: string;
};

export const Clef = ({lastNotePlayed}: ClefProps) => {
    const {spriteSheet} = useContext(PageContext);
    const getClassName = (note: Note, idx: number) => {
        let className = [idx % 2 === 0 ? styles.line : styles.space];
        if (note.isConditional) {
            className.push(styles.conditional);
        }
        return className.join(' ');
    }

    const lines = [...notes.map((note, i) => <div className={getClassName(note, i)} key={note.code}>
        {lastNotePlayed === note.code ? <div className={styles.quarterNote} style={{backgroundPositionX: `200px`, backgroundPositionY: `0px`, backgroundImage: `url(${spriteSheet})`}}></div>: ''}
    </div>)];

    return <div className={styles.clef}>
        {lines}
    </div>;
};
