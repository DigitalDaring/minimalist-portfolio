import { useEffect, useState } from 'react';
import styles from './main-header.component.module.scss';
import { onClickOutside } from '../../sourcery/page-magic/click-outside';

enum NavHeader {
    //ABOUT = 'about', //TODO:  expand content when I have time
    EXPERIMENTS = 'experiments',
    CV = 'cv',
}

const MainHeader = () => {

    const [navState, setNavState] = useState({
        [NavHeader.EXPERIMENTS]: false,
        [NavHeader.CV]: false,
        isGlobalClickConfigured: false
    });

    const closeAllnavs = () => {
        const newState = {...navState};
        newState[NavHeader.EXPERIMENTS] = false;
        newState[NavHeader.CV] = false;
        setNavState(newState);
    }
    
    useEffect(() => {
        const {isGlobalClickConfigured} = navState;
        console.log('is global nav click configured?', isGlobalClickConfigured);
        if (!isGlobalClickConfigured) {
            // this should only ever run once
            const theNav = document.getElementById('HeaderMenu');
            if (theNav != null) {
                onClickOutside(theNav, () => {
                    closeAllnavs();
                });
            }
            setNavState({...navState, isGlobalClickConfigured: true});
        }
    }, [setNavState]);

    const toggleNav = (toToggle: NavHeader) => {
        const isAlreadyOpen = navState[toToggle];
        const {isGlobalClickConfigured} = navState;
        const newState = {
            //[NavHeader.ABOUT]: false,
            [NavHeader.EXPERIMENTS]: false,
            [NavHeader.CV]: false,
            isGlobalClickConfigured
        }

        // if the nav wasn't already open, open it!
        if (!isAlreadyOpen) {
            newState[toToggle] = true;
        }

        setNavState(newState);
    };

    return <header id="HeaderMenu" className={styles.fixedHeader}>
        <nav onClick={() => toggleNav(NavHeader.EXPERIMENTS)}>
            Experiments
            <ul className={navState[NavHeader.EXPERIMENTS] ? styles.expanded : ''}>
                <li>
                    <a target="_blank" href="https://www.youtube.com/@EdmundMakesMusic">Music</a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/DigitalDaring">GitHub</a>
                </li>
                <li>
                    <a target="_blank" href="https://gitlab.com/DigitalDaring">GitLab</a>
                </li>
            </ul>
        </nav>
        <nav onClick={() => toggleNav(NavHeader.CV)}>
            Curriculum Vitae
            <ul className={navState[NavHeader.CV] ? styles.expanded : ''}>
                <li>
                    <a target="_blank" href="edmund-bates-resume-2025.pdf">View PDF</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;