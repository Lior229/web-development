import Joi from 'joi';
import { UploadedFile } from 'express-fileupload';

class Book {

    public id: number;
    public name: string;
    public price: number;
    public image?: UploadedFile;
    public imageName?: string;


    public constructor(book: Book) {
        this.id = book.id;
        this.name = book.name;
        this.price = book.price;
        this.image = book.image;
        this.imageName = book.imageName;
    }

    public static validationSchema = Joi.object({
        id: Joi.number().optional().positive().integer(),
        name: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(2).max(100),
        image: Joi.object().optional(),
        imageName: Joi.string().optional(),
    });



    public validate(): string | undefined {
        console.log('validate book')
        const result = Book.validationSchema.validate(this);

        return result.error?.message;

    }


}


export default Book;


// interface Book{
//     id:number;
//     name:string;
//     price:number;
// }


// const validate = (book:Book) => {
//  // validation logic
// }

