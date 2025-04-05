import FileIcon from '../icons/file-icon.component';
import styles from './languages-overview.component.module.scss';

type LanguagesOverviewProps = {
    onClick: (text: string, title: string) => void;
};

const LanguagesOverview = ({onClick}: LanguagesOverviewProps) => {
    return <ul className={styles.languagesList}>
        <li onClick={() => onClick('TypeScript: 6 years', 'TS')}>
            <FileIcon></FileIcon>
            TypeScript
        </li>
        <li>
            <FileIcon></FileIcon>
            JavaScript
        </li>
        <li>
            <FileIcon></FileIcon>
            Dart
        </li>
        <li>
            <FileIcon></FileIcon>
            C#
        </li>
        <li>
            <FileIcon></FileIcon>
            Swift
        </li>
        <li>
            <FileIcon></FileIcon>
            Ruby
        </li>
        <li>
            <FileIcon></FileIcon>
            Go
        </li>
        <li>
            <FileIcon></FileIcon>
            HTML5/CSS3
        </li>
    </ul>;
};

export default LanguagesOverview;