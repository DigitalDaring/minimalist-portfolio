import FolderIcon from '../icons/folder-icon.component';
import styles from './frameworks-overview.component.module.scss';

type FrameworksOverviewProps = {
    onClick: (text: string, title: string) => void;
};

const FrameworksOverview = ({onClick}: FrameworksOverviewProps) => {

    return <ul className={styles.frameworkList}>
        <li>
            <FolderIcon></FolderIcon>
            React / Next
        </li>
        <li>
            <FolderIcon></FolderIcon>
            Angular
        </li>
        <li>
            <FolderIcon></FolderIcon>
            Svelte
        </li>
        <li>
            <FolderIcon></FolderIcon>
            Flutter
        </li>
        <li>
            <FolderIcon></FolderIcon>
            Native iOS
        </li>
        <li>
            <FolderIcon></FolderIcon>
            Node
        </li>
        <li>
            <FolderIcon></FolderIcon>
            .Net
        </li>
    </ul>;
};

export default FrameworksOverview;