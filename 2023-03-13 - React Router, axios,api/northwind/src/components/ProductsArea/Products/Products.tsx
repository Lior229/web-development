import React, { FC } from 'react';
import Product from '../../../models/Product';
import ProductItem from './ProductItem/ProductItem';
import styles from './Products.module.scss';

interface ProductsProps {
    products: Product[]
}

const Products: FC<ProductsProps> = ({ products }) => {

    const renderProducts = () => {
        return products.map((product) => {
            const { price, id } = product;
            return <ProductItem key={id} product={product} />
        });
    }

    return (
        <ul className={styles.Products}>
            {renderProducts()}
        </ul>
    )
}




export default Products;
