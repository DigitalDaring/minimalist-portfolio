import { useContext, useEffect, useState } from 'react';
import styles from './icons.module.scss';
import { PageContext } from '@/app/context';

type CloseIconProps = {
    onClick: () => void;
}

const normalOffset = -140;
const hoverOffset = -170;
const CloseIcon = ({onClick}: CloseIconProps) => {

    const [backgroundOffset, setBackgroundOffset] = useState({x: normalOffset, y: 0});

    const {spriteSheet} = useContext(PageContext);

    const enableHoverEffect = () => {
       setBackgroundOffset({...backgroundOffset, x: hoverOffset});
    }

    const disableHoverEffect = () => {
        setBackgroundOffset({...backgroundOffset, x: normalOffset});
    }

    return <div  onClick={onClick} onMouseOver={enableHoverEffect} onMouseLeave={disableHoverEffect} className={styles.closeIcon} style={{backgroundPositionX: `${backgroundOffset.x}px`, backgroundPositionY: `${backgroundOffset.y}px`, backgroundImage: `url(${spriteSheet})`}}></div>;
};

export default CloseIcon;
