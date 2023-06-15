import { OkPacket } from 'mysql';
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

    return await dal.execute<Product[]>(sql);
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

    const products = await dal.execute<Product[]>(sql);

    const product = products[0];

    if (!product) throw new ResourceNotFound(id);

    return product;
}


// Add new product

export const addProduct = async (product: Product): Promise<Product> => {

    //Validation
    const error = product.validate();
    if (error) throw new ValidationError(error);

    const { name, price, stock } = product;

    //Query
    const sql = `
          INSERT INTO products(ProductName,UnitPrice,UnitsInStock)
          Values('${name}',${price},${stock});
      `;

    const info = await dal.execute<OkPacket>(sql);

    // Set auto increment id back to the product
    product.id = info.insertId;


    return product;


}

// update an existing product
export const updateProduct = async (product: Product): Promise<Product> => {

    //Validation
    const error = product.validate();
    if (error) throw new ValidationError(error);

    const { id, name, price, stock } = product;

    //Query
    const sql = `
        UPDATE products SET 
               ProductName = '${name}',
               UnitPrice = ${price},
               UnitsInStock = ${stock}
        WHERE ProductID = ${id}
    `;

    //execute
    const info = await dal.execute<OkPacket>(sql);

    // if not exists
    if (info.affectedRows === 0) {
        throw new ResourceNotFound(id);
    }

    return product;

}
// Delete Product
export const deleteProduct = async (id: number): Promise<void> => {

    // query
    const sql = `DELETE FROM products WHERE ProductId = ${id}`;

    //execute
    const info = await dal.execute<OkPacket>(sql);

    if (info.affectedRows === 0) {
        throw new ResourceNotFound(id);
    }

}

// Get products cheaper than min price
export const getProductsCheaperThan = async (minPrice: number): Promise<Product[]> => {

    //query
    const sql = `
       SELECT ProductID AS id,
              ProductName AS name,
              UnitPrice AS price,
              UnitsInStock AS stock
       FROM products
       WHERE UnitPrice <= ${minPrice}
       ORDER BY UnitPrice
    `;

    //execute
    return await dal.execute<Product[]>(sql);
}


export const getProductsExpensiveThan = async (maxPrice: number): Promise<Product[]> => {

    //query
    const sql = `
       SELECT ProductID AS id,
              ProductName AS name,
              UnitPrice AS price,
              UnitsInStock AS stock
       FROM products
       WHERE UnitPrice >= ${maxPrice}
       ORDER BY UnitPrice
    `;

    //execute
    return await dal.execute<Product[]>(sql);
}