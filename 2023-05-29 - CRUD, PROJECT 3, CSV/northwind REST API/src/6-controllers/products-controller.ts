import express, { Request, Response, NextFunction } from 'express';
import * as productsLogic from '../5-logic/products-logic';
import Product from '../4-models/Product';
import { parse as json2csv } from 'json2csv';
import path from 'path';
import fs from 'fs/promises';
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

router.get('/products/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {
    try {

        const id = +request.params.id;
        const product = await productsLogic.getOneProduct(id);
        response.json(product)

    } catch (err: any) {
        next(err);
    }
})

//POST http://localhost:3001/api/products
router.post('/products', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new Product(request.body);
        const addedProduct = await productsLogic.addProduct(product);
        response.status(201).json(addedProduct);

    } catch (err) {
        next(err)
    }
});

//PUT http://localhost:3001/api/products/:id
router.put('/products/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {

    try {
        request.body.id = +request.params.id
        const product = new Product(request.body);
        const updatedProduct = await productsLogic.updateProduct(product);

        response.json(updatedProduct);

    } catch (err) {
        next(err);
    }

});

//DELETE http://localhost:3001/api/products/:id

router.delete('/products/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {
    try {
        await productsLogic.deleteProduct(+request.params.id)
        response.status(204);
    } catch (err) {
        next(err);
    }
});

//GET http://localhost:3001/api/products-cheaper-than/:minPrice

router.get("/products-cheaper-than/:minPrice", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const minPrice = +request.params.minPrice;
        const products = await productsLogic.getProductsCheaperThan(minPrice);
        response.json(products);

    } catch (err) {
        next(err)
    }
})


//GET http://localhost:3001/api/products-expensive-than?maxPrice=50

router.get("/products-expensive-than", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { maxPrice } = request.query;

        const products = await productsLogic.getProductsExpensiveThan(maxPrice ? +maxPrice : 100);
        response.json(products);


    } catch (err) {
        next(err);
    }
})

//GET http://localhost:3001/api/products/csv

router.get('/products/csv', async (request: Request, response: Response, next: NextFunction) => {

    try {

        const products = await productsLogic.getAllProducts();

        //specify the fields/columns names you want to export
        const fields = ["id", "name", "price", "stock"];
        const csv = json2csv(products, { fields });

        //write csv string to a file

        const dateTime = Date.now();
        const dirPath = path.join(__dirname, "..", "..", "public", "exports");
        const filePath = path.join(dirPath, `products-${dateTime}.csv`);

        //create the directory if it does not exists
        await fs.mkdir(dirPath, { recursive: true });
        await fs.writeFile(filePath, csv);

        //set the headers so the browser knows this is a downloadable file
        response.setHeader('Content-Type', "text/csv");
        response.setHeader("Content-Disposition", `attachment; filename=products-${dateTime}.csv`);

        //response as download

        response.download(filePath);


    } catch (err) {
        next(err);
    }
});


export default router;

