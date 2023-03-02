import React, { FC } from 'react';
import styles from './Details.module.scss';

interface DetailsProps {}

const myImg = require('./cat.jpg')

const Details: FC<DetailsProps> = () => (

    <div className={styles.Details}>
        <h5>Details</h5>
        <p> I wanna be web developer please hire me</p>
        <img src={myImg}/>
    </div>
);

export default Details;


