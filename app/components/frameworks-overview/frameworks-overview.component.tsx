import FolderIcon from '../icons/folder-icon.component';
import styles from './frameworks-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';

type FrameworksOverviewProps = {
    onClick: (text: string, title: string) => void;
};

const FrameworksOverview = ({onClick}: FrameworksOverviewProps) => {

    const classes = [styles.frameworkList, windowStyles.window];

    return <ul className={classes.join(' ')}>
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