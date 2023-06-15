import express, { Request, Response, NextFunction } from 'express';
import * as productsLogic from '../5-logic/products-logic';
const router = express.Router();


// GET http://localhost:3001/api/products

router.get('/products', async (request: Request, response: Response, next: NextFunction) => {
    try {

        const products = await productsLogic.getAllProducts();

        response.json(products)

    } catch (err: any) {
        next(err);
    }
})

// GET http://localhost:3001/api/products/:id

router.get('/products/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {

        const id = +request.params.id;
        const product = await productsLogic.getOneProduct(id);
        response.json(product)

    } catch (err: any) {
        next(err);
    }
})

export default router;