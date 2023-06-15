import dal from '../2-utils/dal';
import { ResourceNotFound, ValidationError } from '../4-models/Error';
import Product from '../4-models/Product';


// Get all products

export const getAllProducts = async (): Promise<Product[]> => {

    // creating the query 
    const sql = `
           SELECT ProductID AS id,
                  ProductName AS name,
                  UnitPrice AS price,
                  UnitsInStock AS stock
            FROM products
    `;

    //execute and return
    return await dal.execute(sql);
}

export const getOneProduct = async (id: number): Promise<Product> => {

    // creating the query
    const sql = `
            SELECT ProductID as id,
                   ProductName as name,
                   UnitPrice as price,
                   UnitsInStock as stock
            FROM products
            WHERE ProductId = ${id}
    `;

    const products = await dal.execute(sql) as Product[];

    const product = products[0];

    if (!product) throw new ResourceNotFound(id);

    return product;
}