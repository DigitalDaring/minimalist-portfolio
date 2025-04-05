import { getCloseIcon, getInvertedCloseIcon } from '@/app/canvas-magic/icons';
import { useEffect, useState } from 'react';
import styles from './icons.module.scss';

type CloseIconProps = {
    onClick: () => void;
}

const CloseIcon = ({onClick}: CloseIconProps) => {
    const [closeIcon, setCloseIcon] = useState<string>('');
    const [invertedCloseIcon, setInvertedCloseIcon] = useState<string>('');
    const [currentIcon, setCurrentIcon] = useState<string>('');

    useEffect(() => {
        getCloseIcon().then((icon) => {
            setCloseIcon(icon);
            setCurrentIcon(icon);
        });

        getInvertedCloseIcon().then((invertedIcon) => {
            setInvertedCloseIcon(invertedIcon);
        });
    }, []);

    const enableHoverEffect = () => {
       const newIcon = `${invertedCloseIcon}`;
       setCurrentIcon(newIcon);
    }

    const disableHoverEffect = () => {
        const newIcon = `${closeIcon}`;
       setCurrentIcon(newIcon);
    }

    return <div onClick={onClick} onMouseEnter={() => enableHoverEffect()} onMouseLeave={disableHoverEffect} className={styles.closeIcon} style={{backgroundImage: `url(${currentIcon})`}}></div>;
};

export default CloseIcon;
