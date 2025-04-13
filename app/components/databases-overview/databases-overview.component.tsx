import FileIcon from '../icons/file-icon.component';
import styles from './frameworks-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';
import { LANGUAGES_AND_FRAMEWORKS } from '@/app/models/skills';

type DatabasesOverviewProps = {
    onClick: (lang: LANGUAGES_AND_FRAMEWORKS) => void;
};

const DatabasesOverview = ({onClick}: DatabasesOverviewProps) => {

    const classes = [styles.databaseList, windowStyles.window];

    return <ul className={classes.join(' ')}>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.MONGO)}>
            <FileIcon></FileIcon>
            MongoDB
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.SQL)}>
            <FileIcon></FileIcon>
            MS SQL
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.COSMOSDB)}>
            <FileIcon></FileIcon>
            CosmosDB
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.REDIS)}>
            <FileIcon></FileIcon>
            Redis
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.SQLITE)}>
            <FileIcon></FileIcon>
            SQLite
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.FIREBASE)}>
            <FileIcon></FileIcon>
            Firebase
        </li>
    </ul>;
};

export default DatabasesOverview;