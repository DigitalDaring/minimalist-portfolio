import { useContext, useState } from 'react';
import styles from './icons.module.scss';
import { PageContext } from '@/app/context';

const normalOffset = 0;
const hoverOffset = -40;
const FolderIcon = () => {
    const [backgroundOffset, setBackgroundOffset] = useState({x: normalOffset, y: 0});
    const {spriteSheet} = useContext(PageContext);

    const enableHoverEffect = () => {
        setBackgroundOffset({...backgroundOffset, x: hoverOffset});
     }
 
     const disableHoverEffect = () => {
         setBackgroundOffset({...backgroundOffset, x: normalOffset});
     }

    return <div onMouseOver={enableHoverEffect} onMouseLeave={disableHoverEffect} className={styles.folderIcon} style={{backgroundPositionX: `${backgroundOffset.x}px`, backgroundPositionY: `${backgroundOffset.y}px`, backgroundImage: `url(${spriteSheet})`}}></div>;
};

export default FolderIcon;
