'use client'
import styles from './page.module.css';
import MainHeader from './components/main-header/main-header.component';
import StylishWindow from './components/stylish-window/stylish-window.component';
import { getDitheringImg4 } from './canvas-magic/dithering';
import { useEffect, useState, useContext } from 'react';
import { } from 'react';
import PianoOctave from './components/piano-octave/piano-octave.component';
import LanguagesOverview from './components/languages-overview/languages-overview.component';
import FrameworksOverview from './components/frameworks-overview/frameworks-overview.component';
import DatabasesOverview from './components/databases-overview/databases-overview.component';
import SimpleModal from './components/simple-modal/simple-modal.component';
import CloseIcon from './components/icons/close-icon.component';
import { generateSpriteSheet } from './canvas-magic/icons';
import { PortfolioContext, PageContext } from './context';
import { LANGUAGES_AND_FRAMEWORKS, SkillDetails, Skills } from './models/skills';
import {unmute} from './sound-magic/unmute';
import { Clef } from './components/clef/clef.component';

type ModalState = {
  title: string;
  experience: string;
  details: string[];
  isVisible: boolean;
  isClosing: boolean;
  isHuge: boolean;
}

type MusicState = {
  lastNotePlayed: string;
}

const Home = () => {

  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [modalState, setModalState] = useState<ModalState>({
    title: '',
    experience: '',
    details: [],
    isVisible: false,
    isClosing: false,
    isHuge: false
  });

  const [contextState, setContextState] = useState<PortfolioContext>({
    spriteSheet: undefined
  });

  const [musicState, setMusicState] = useState<MusicState>({
    lastNotePlayed: 'C3'
  });
  
  const closeModal = () => {
    setModalState({
      ...modalState,
      isVisible: true,
      isClosing: true
    });

    window.setTimeout(() => {
      setModalState({
        ...modalState,
        isVisible: false,
        isClosing: false
      });
    }, 500);
  };

  const showModal = (lang: LANGUAGES_AND_FRAMEWORKS) => {
    const content = Skills[lang] as SkillDetails;
    setModalState({
      ...modalState,
      title: content.title,
      experience: content.experience,
      details: content.details || [],
      isVisible: true
    });
  };


  useEffect(() => {
    generateSpriteSheet().then((spriteSheet) => {
      const newSheet = spriteSheet ?? '';
      setContextState({...contextState, spriteSheet: newSheet});
    });

    getDitheringImg4().then((ditheredImage) => {
      setBackgroundImage(ditheredImage);
    });
  }, []);

  const modalDetails = modalState.details.map((detail) => {
    return <p>{detail}</p>
  });

  const pianoOutput = <section className={styles.pianoSection}>
    <PianoOctave onKeyClicked={(key: string) => setMusicState({lastNotePlayed: key})}/>
    <Clef lastNotePlayed={musicState.lastNotePlayed}/>
  </section>

  return (
    <PageContext.Provider value={contextState}>
      <div className={styles.crtPage}>
        <SimpleModal isVisible={modalState.isVisible} 
                     isClosing={modalState.isClosing}
                     isHuge={modalState.isHuge}>
          <CloseIcon onClick={closeModal}/>
          <h2>{modalState.title}</h2>
          <h3>
            {modalState.experience}
          </h3>
          {modalDetails}
        </SimpleModal>
        <MainHeader></MainHeader>
        <main className={styles.main} style={{backgroundImage: `url(${backgroundImage})`}}>
          <section className={styles.windows}>
            <StylishWindow 
                title='Languages'
                subtitle1=''
                subtitle2=''
                subtitle3=''
                content={<LanguagesOverview onClick={showModal}/>}
                >
            </StylishWindow>
            <StylishWindow 
                title='Frameworks / Libraries'
                subtitle1=''
                subtitle2=''
                subtitle3=''
                content={<FrameworksOverview onClick={showModal}/>}
                >
            </StylishWindow>
            <StylishWindow 
                title='Databases'
                subtitle1=''
                subtitle2=''
                subtitle3=''
                content={<DatabasesOverview onClick={showModal}/>}
                >
            </StylishWindow>
            <StylishWindow 
              title='Extracurricular'
              subtitle1='Piano'
              subtitle2='Banjo'
              subtitle3='Guitar'
              content={pianoOutput}
              >
            </StylishWindow>
          </section>
        </main>
      </div>
    </PageContext.Provider>
  );
}

export default Home;
