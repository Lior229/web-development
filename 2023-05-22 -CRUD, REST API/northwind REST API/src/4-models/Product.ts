import Joi from 'joi';

class Product {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;

    public constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
    }

    private static validationSchema = Joi.object({
        id: Joi.number().integer().positive().optional(),
        name: Joi.string().required().min(2).max(40),
        price: Joi.number().required().min(0).max(1000),
        stock: Joi.number().required().min(0).max(1000)
    });

    public validate(): string | undefined {
        const result = Product.validationSchema.validate(this);
        return result.error?.message;
    }


}

export default Product;