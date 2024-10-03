'use client'
import styles from './page.module.css';
import MainHeader from './components/main-header/main-header.component';
import StylishWindow from './components/stylish-window/stylish-window.component';
import { getDitheringImg4 } from './canvas-magic/dithering';
import { useEffect, useState } from 'react';
import PianoOctave from './components/piano-octave/piano-octave.component';
import LanguagesOverview from './components/languages-overview/languages-overview.component';
import FrameworksOverview from './components/frameworks-overview/frameworks-overview.component';
import DatabasesOverview from './components/databases-overview/databases-overview.component';

const Home = () => {

  const [backgroundImage, setBackgroundImage] = useState<string>('');
  useEffect(() => {
    getDitheringImg4().then((ditheredImage) => {
      setBackgroundImage(ditheredImage);
    });
  }, []);

  return (
    <div className={styles.crtPage}>
      <MainHeader></MainHeader>
      <main className={styles.main} style={{backgroundImage: `url(${backgroundImage})`}}>
        <section className={styles.windows}>
          <StylishWindow 
              title='Languages'
              subtitle1=''
              subtitle2=''
              subtitle3=''
              content={<LanguagesOverview/>}
              >
          </StylishWindow>
          <StylishWindow 
              title='Frameworks / Libraries'
              subtitle1=''
              subtitle2=''
              subtitle3=''
              content={<FrameworksOverview/>}
              >
          </StylishWindow>
          <StylishWindow 
              title='Databases'
              subtitle1=''
              subtitle2=''
              subtitle3=''
              content={<DatabasesOverview/>}
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
  );
}

export default Home;
