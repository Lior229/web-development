import React, { FC } from 'react';
import styles from './ShoesCard.module.scss';

interface ShoesCardProps {
    brand: string;
    size: number;
    price: number;
    image: string;
 }

const ShoesCard: FC<ShoesCardProps> = ({brand, size, price, image}) => {
    
    return (
        <div className={`Box ${styles.ShoesCard}`}>
            <span>Our ShoesCard </span> <br />
            <span>{brand} </span><br />
            <span>{size} </span><br />
            <span>{price}</span><br />
            <span>{image}</span><br />
        </div>
    )
}


export default ShoesCard;
