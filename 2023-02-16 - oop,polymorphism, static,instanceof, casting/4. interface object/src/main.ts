
//const book = new Book(); // cant create an object or instance from Book, as it is not a Class

const book: Book = {
    name: 'Harry Potter',
    pages: 653,
    price: 100
}

const book2: Book = {
    name: 'Harry Potter2',
    pages: 653,
    price: 100
}

type Books = Book[];

const books:Books = [book,book2]