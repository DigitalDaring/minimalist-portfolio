import FolderIcon from '../icons/folder-icon.component';
import styles from './frameworks-overview.component.module.scss';
import windowStyles from '../../styles/window.module.scss';
import { LANGUAGES_AND_FRAMEWORKS } from '@/app/models/skills';

type FrameworksOverviewProps = {
    onClick: (lang: LANGUAGES_AND_FRAMEWORKS) => void;
};

const FrameworksOverview = ({onClick}: FrameworksOverviewProps) => {

    const classes = [styles.frameworkList, windowStyles.window];

    return <ul className={classes.join(' ')}>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.REACT)}>
            <FolderIcon></FolderIcon>
            React / Next
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.ANGULAR)}>
            <FolderIcon></FolderIcon>
            Angular
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.SVELTE)}>
            <FolderIcon></FolderIcon>
            Svelte
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.FLUTTER)}>
            <FolderIcon></FolderIcon>
            Flutter
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.NATIVEIOS)}>
            <FolderIcon></FolderIcon>
            Native iOS
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.NODE)}>
            <FolderIcon></FolderIcon>
            Node
        </li>
        <li onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.DOT_NET)}>
            <FolderIcon></FolderIcon>
            .Net
        </li>
    </ul>;
};

export default FrameworksOverview;