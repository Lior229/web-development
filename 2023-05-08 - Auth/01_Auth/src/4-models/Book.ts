import Joi from 'joi';
class Book {

    public id: number;
    public name: string;
    public price: number;


    public constructor(book: Book) {
        this.id = book.id;
        this.name = book.name;
        this.price = book.price;
    }

    public static validationSchema = Joi.object({
        id: Joi.number().optional().positive().integer(),
        name: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(2).max(100),
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

