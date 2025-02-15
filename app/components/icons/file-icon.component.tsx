import {getFileIcon, getInvertedFileIcon} from '@/app/canvas-magic/icons';
import { useEffect, useState } from 'react';
import styles from './icons.module.scss';

const FileIcon = () => {
    const [fileIcon, setFileIcon] = useState<string>('');
    const [invertedFileIcon, setInvertedFileIcon] = useState<string>('');
    const [currentIcon, setCurrentIcon] = useState<string>('');

    useEffect(() => {
        getFileIcon().then((icon) => {
            setFileIcon(icon);
            setCurrentIcon(icon);
        });

        getInvertedFileIcon().then((invertedIcon) => {
            setInvertedFileIcon(invertedIcon);
        });
    }, []);

    const enableHoverEffect = () => {
       const newIcon = `${invertedFileIcon}`;
       setCurrentIcon(newIcon);
    }

    const disableHoverEffect = () => {
        const newIcon = `${fileIcon}`;
       setCurrentIcon(newIcon);
    }

    return <div onClick={enableHoverEffect} onMouseEnter={() => enableHoverEffect()} onMouseLeave={disableHoverEffect} className={styles.fileIcon} style={{backgroundImage: `url(${currentIcon})`}}></div>;
};

export default FileIcon;
