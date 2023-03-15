import React, { FC } from 'react';
import styles from './Main.module.scss';
import ShoesCard from '../../HomeArea/ShoesCard/ShoesCard';

interface MainProps { }

const Main: FC<MainProps> = () => (
    <main className={styles.Main}>
        <ShoesCard brand="lior" size={40} price={10} image="liorrr"></ShoesCard>
    </main>
);

export default Main;
