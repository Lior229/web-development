import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <h1>Welcom to my first React website</h1>
  </div>
);

export default Header;
