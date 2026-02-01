import { useState } from 'react';
import styles from './main-header.component.module.scss';

enum NavHeader {
    ABOUT = 'about',
    EXPERIMENTS = 'experiments',
    CV = 'cv'
}

const MainHeader = () => {

    const [navState, setNavState] = useState({
        [NavHeader.ABOUT]: false,
        [NavHeader.EXPERIMENTS]: false,
        [NavHeader.CV]: false
    });

    const toggleNav = (toToggle: NavHeader) => {
        const isAlreadyOpen = navState[toToggle];
        const newState = {
            [NavHeader.ABOUT]: false,
            [NavHeader.EXPERIMENTS]: false,
            [NavHeader.CV]: false
        }

        // if the nav wasn't already open, open it!
        if (!isAlreadyOpen) {
            newState[toToggle] = true;
        }

        setNavState(newState);
    };


    return <header className={styles.fixedHeader}>
        <nav onClick={() => toggleNav(NavHeader.ABOUT)}>
            About
            <ul className={navState[NavHeader.ABOUT] ? styles.expanded : ''}>
                <li>
                    About This Site
                </li>
                <li>
                    About The Author
                </li>
            </ul>
        </nav>
        <nav onClick={() => toggleNav(NavHeader.EXPERIMENTS)}>
            Experiments
            <ul className={navState[NavHeader.EXPERIMENTS] ? styles.expanded : ''}>
                <li>
                    Music Visualizer
                </li>
                <li>
                    Image Dots
                </li>
                <li>
                    Live Video Filters
                </li>
            </ul>
        </nav>
        <nav onClick={() => toggleNav(NavHeader.CV)}>
            Curriculum Vitae
            <ul className={navState[NavHeader.CV] ? styles.expanded : ''}>
                <li>
                    Download PDF
                </li>
            </ul>
        </nav>
    </header>
}

export default MainHeader;