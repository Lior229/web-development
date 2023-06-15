import fsPromises from 'fs/promises';
import Book from '../4-models/Book';

const filePath = "./src/1-assets/json/books.json";


// Get all books from the db (json file)
export const getAllBooks = async ():Promise<Book[]> => {
    const content = await fsPromises.readFile(filePath,'utf-8'); //  '[{id,name,price},{id...},{},{}]'
    return JSON.parse(content);
}

export const saveAllBooks = async  (books:Book[]):Promise<void> => {
  const content = JSON.stringify(books,undefined,4)// 4 = number of spaces for each tab
  await fsPromises.writeFile(filePath,content);
}
