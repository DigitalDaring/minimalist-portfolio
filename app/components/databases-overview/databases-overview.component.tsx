import FileIcon from '../icons/file-icon.component';
import styles from './frameworks-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';

type DatabasesOverviewProps = {
    onClick: (text: string, title: string) => void;
};

const DatabasesOverview = ({onClick}: DatabasesOverviewProps) => {

    const classes = [styles.databaseList, windowStyles.window];

    return <ul className={classes.join(' ')}>
        <li>
            <FileIcon></FileIcon>
            MongoDB
        </li>
        <li>
            <FileIcon></FileIcon>
            MS SQL
        </li>
        <li>
            <FileIcon></FileIcon>
            CosmosDB
        </li>
        <li>
            <FileIcon></FileIcon>
            Redis
        </li>
        <li>
            <FileIcon></FileIcon>
            SQLite
        </li>
        <li>
            <FileIcon></FileIcon>
            Firebase
        </li>
    </ul>;
};

export default DatabasesOverview;