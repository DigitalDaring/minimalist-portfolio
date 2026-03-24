import { useContext } from 'react';
import styles from './clef.module.scss';
import { PageContext } from '@/app/context';
import { getIconOffset, SiteIconName } from '@/app/sourcery/canvas-magic/icons';
type Note = {
    name: string;
    code: string;
    isConditional: boolean;
};

const notes = [
    {name: 'C', code: 'C4', isConditional: true},
    {name: 'D', code: 'D4'},
    {name: 'E', code: 'E4'},
    {name: 'F', code: 'F4'},
    {name: 'G', code: 'G4'},
    {name: 'A', code: 'A5'},
    {name: 'B', code: 'B5'},
    {name: 'C', code: 'C5'},
    {name: 'D', code: 'D5'},
    {name: 'E', code: 'E5'},
    {name: 'F', code: 'F5'},
] as Array<Note>;

type ClefProps = {
    lastNotePlayed: string;
};

export const Clef = ({lastNotePlayed}: ClefProps) => {
    const {spriteSheet} = useContext(PageContext);
    const notePosition = `-${getIconOffset(SiteIconName.QUARTER_NOTE)}px`;
    const sharpNotePosition = `-${getIconOffset(SiteIconName.SHARP_QUARTER_NOTE)}px`;
    const isSharp = lastNotePlayed.includes('s');
    const lastNormalNotePlayed = lastNotePlayed.replace('s','');
    const getClassName = (note: Note, idx: number) => {
        let className = [idx % 2 === 0 ? styles.line : styles.space];
        if (note.isConditional) {
            className.push(styles.conditional);
        }
        return className.join(' ');
    }

    const lines = [...notes.map((note, i) => <div className={getClassName(note, i)} key={note.code}>
        {lastNormalNotePlayed === note.code ? <div className={styles.quarterNote} style={{backgroundPositionX: isSharp ? sharpNotePosition : notePosition, backgroundPositionY: `0px`, backgroundImage: `url(${spriteSheet})`}}></div>: ''}
    </div>)];

    return <div className={styles.clef}>
        {lines}
    </div>;
};
