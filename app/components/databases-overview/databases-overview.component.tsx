import FileIcon from '../icons/file-icon.component';
import styles from './frameworks-overview.component.module.scss';
const DatabasesOverview = () => {
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