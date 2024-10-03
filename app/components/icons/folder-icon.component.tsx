import {getFolderIcon} from '@/app/canvas-magic/icons';
import { useEffect, useState } from 'react';
import styles from './icons.module.scss';

const FolderIcon = () => {
    const [folderIcon, setFolderIcon] = useState<string>('');
    useEffect(() => {
        getFolderIcon().then((icon) => {
            setFolderIcon(icon);
        }); 
    }, []);

    return <div className={styles.folderIcon} style={{backgroundImage: `url(${folderIcon})`}}></div>;
};

export default FolderIcon;
