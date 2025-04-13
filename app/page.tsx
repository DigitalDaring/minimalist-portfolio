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
import { LANGUAGES_AND_FRAMEWORKS, Skills } from './models/skills';

type ModalState = {
  text: string;
  title: string;
  isVisible: boolean;
}

const Home = () => {

  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [modalState, setModalState] = useState<ModalState>({
    text: '',
    title: '',
    isVisible: false
  });

  const [contextState, setContextState] = useState<PortfolioContext>({
    spriteSheet: undefined
  });
  
  const closeModal = () => {
    setModalState({
      ...modalState,
      isVisible: false
    });
  };

  const showModal = (lang: LANGUAGES_AND_FRAMEWORKS) => {
    const content = Skills[lang];
    setModalState({
      ...modalState,
      title: content.title,
      text: content.text,
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

  return (
    <PageContext.Provider value={contextState}>
      <div className={styles.crtPage}>
        <SimpleModal isVisible={modalState.isVisible}>
          <CloseIcon onClick={closeModal}/>
          <h2>{modalState.title}</h2>
          <p>
            {modalState.text}
          </p>
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
              content={<PianoOctave/>}
              >
            </StylishWindow>
          </section>
        </main>
      </div>
    </PageContext.Provider>
  );
}

export default Home;
