class Book {
    public id:number;
    public name:string;
    public price:number;


    public constructor(book:Book){
        this.id = book.id;
        this.name = book.name;
        this.price = book.price;
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

