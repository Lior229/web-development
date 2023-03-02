import React, { FC } from 'react';
import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Skills}>
    <h3>Skills</h3>
  </div>
);

export default Skills;
