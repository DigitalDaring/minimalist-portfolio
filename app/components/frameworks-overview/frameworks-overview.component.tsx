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
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.REACT)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.REACT)}>
            <FolderIcon></FolderIcon>
            React / Next
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.ANGULAR)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.ANGULAR)}>
            <FolderIcon></FolderIcon>
            Angular
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.FLUTTER)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.FLUTTER)}>
            <FolderIcon></FolderIcon>
            Flutter
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.NATIVEIOS)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.NATIVEIOS)}>
            <FolderIcon></FolderIcon>
            Native iOS
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.NODE)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.NODE)}>
            <FolderIcon></FolderIcon>
            Node
        </li>
        <li onTouchStart={() => onClick(LANGUAGES_AND_FRAMEWORKS.DOT_NET)} onClick={() => onClick(LANGUAGES_AND_FRAMEWORKS.DOT_NET)}>
            <FolderIcon></FolderIcon>
            .Net
        </li>
    </ul>;
};

export default FrameworksOverview;