import {getFileIcon} from '@/app/canvas-magic/icons';
import { useEffect, useState } from 'react';
import styles from './icons.module.scss';

const FileIcon = () => {
    const [fileIcon, setFileIcon] = useState<string>('');
    useEffect(() => {
        getFileIcon().then((icon) => {
            setFileIcon(icon);
        }); 
    }, []);

    return <div className={styles.fileIcon} style={{backgroundImage: `url(${fileIcon})`}}></div>;
};

export default FileIcon;
