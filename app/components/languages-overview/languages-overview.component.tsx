import FileIcon from '../icons/file-icon.component';
import styles from './languages-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';
import { LANGUAGES_AND_FRAMEWORKS } from '@/app/models/skills';

type LanguagesOverviewProps = {
    onClick: (lang: LANGUAGES_AND_FRAMEWORKS) => void;
};

const LanguagesOverview = ({onClick}: LanguagesOverviewProps) => {
    const classes = [styles.languagesList, windowStyles.window];

    return <ul className={classes.join(' ')}>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.TS)}>
            <FileIcon></FileIcon>
            TypeScript
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.JS)}>
            <FileIcon></FileIcon>
            JavaScript
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.DART)}>
            <FileIcon></FileIcon>
            Dart
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.CSHARP)}>
            <FileIcon></FileIcon>
            C#
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.SWIFT)}>
            <FileIcon></FileIcon>
            Swift
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.RUBY)}>
            <FileIcon></FileIcon>
            Ruby
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.GO)}>
            <FileIcon></FileIcon>
            Go
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.HTML_CSS)}>
            <FileIcon></FileIcon>
            HTML5/CSS3
        </li>
    </ul>;
};

export default LanguagesOverview;