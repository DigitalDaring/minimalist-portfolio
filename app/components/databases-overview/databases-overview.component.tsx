import FileIcon from '../icons/file-icon.component';
import styles from './frameworks-overview.component.module.scss';

type DatabasesOverviewProps = {
    onClick: (text: string, title: string) => void;
};

const DatabasesOverview = ({onClick}: DatabasesOverviewProps) => {
    return <ul className={styles.databaseList}>
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