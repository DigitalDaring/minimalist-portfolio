'use client'
import styles from './page.module.css';
import MainHeader from './components/main-header/main-header.component';
import StylishWindow from './components/stylish-window/stylish-window.component';
import { getDitheringImg } from './canvas-magic/dithering';
import { useState } from 'react';

const Home = () => {

  const [backgroundImage, setBackgroundImage] = useState<string>('');
  getDitheringImg().then((ditheredImage) => {
    setBackgroundImage(ditheredImage);
  });

  return (
    <div className={styles.crtPage}>
      <MainHeader></MainHeader>
      <main className={styles.main} style={{backgroundImage: `url(${backgroundImage})`}}>
        <section className={styles.windows}>
          <StylishWindow title='About'></StylishWindow>
        </section>
      </main>
    </div>
  );
}

export default Home;
