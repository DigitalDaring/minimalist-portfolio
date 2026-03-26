import FileIcon from '../icons/file-icon.component';
import styles from './databases-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';
import { LANGUAGES_AND_FRAMEWORKS } from '@/app/models/skills';

type DatabasesOverviewProps = {
    onClick: (lang: LANGUAGES_AND_FRAMEWORKS) => void;
};

const DatabasesOverview = ({onClick}: DatabasesOverviewProps) => {

    const classes = [styles.databaseList, windowStyles.window];

    return <ul className={classes.join(' ')}>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.MONGO)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.MONGO)}>
            <FileIcon></FileIcon>
            MongoDB
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.SQL)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.SQL)}>
            <FileIcon></FileIcon>
            SQL
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.FIREBASE)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.FIREBASE)}>
            <FileIcon></FileIcon>
            Firebase
        </li>
    </ul>;
};

export default DatabasesOverview;