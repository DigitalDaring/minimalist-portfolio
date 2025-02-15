import {getFolderIcon, getInvertedFolderIcon} from '@/app/canvas-magic/icons';
import { useEffect, useState } from 'react';
import styles from './icons.module.scss';

const FolderIcon = () => {
    const [folderIcon, setFolderIcon] = useState<string>('');
    const [invertedFolderIcon, setInvertedFolderIcon] = useState<string>('');
    const [currentIcon, setCurrentIcon] = useState<string>('');

    useEffect(() => {
        getFolderIcon().then((icon) => {
            setFolderIcon(icon);
            setCurrentIcon(icon);
        });

        getInvertedFolderIcon().then((invertedIcon) => {
            setInvertedFolderIcon(invertedIcon);
        });
    }, []);

    const enableHoverEffect = () => {
       const newIcon = `${invertedFolderIcon}`;
       setCurrentIcon(newIcon);
    }

    const disableHoverEffect = () => {
        const newIcon = `${folderIcon}`;
       setCurrentIcon(newIcon);
    }
    useEffect(() => {
        getFolderIcon().then((icon) => {
            setFolderIcon(icon);
        }); 
    }, []);

    return <div onMouseOver={enableHoverEffect} onMouseLeave={disableHoverEffect} className={styles.folderIcon} style={{backgroundImage: `url(${currentIcon})`}}></div>;
};

export default FolderIcon;
