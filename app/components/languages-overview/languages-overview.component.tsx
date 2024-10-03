import FileIcon from '../icons/file-icon.component';
import styles from './languages-overview.component.module.scss';

const LanguagesOverview = () => {
    return <ul className={styles.languagesList}>
        <li>
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