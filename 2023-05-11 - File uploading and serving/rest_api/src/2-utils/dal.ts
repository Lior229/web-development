import fsPromises from 'fs/promises';
import Book from '../4-models/Book';
import User from '../4-models/User';

const booksFilePath = "./src/1-assets/json/books.json";
const usersFilePath = "./src/1-assets/json/users.json";

// Get all books from the db (json file)
export const getAllBooks = async (): Promise<Book[]> => {
    const content = await fsPromises.readFile(booksFilePath, 'utf-8'); //  '[{id,name,price},{id...},{},{}]'
    return JSON.parse(content);
}

export const saveAllBooks = async (books: Book[]): Promise<void> => {
    const content = JSON.stringify(books, undefined, 4)// 4 = number of spaces for each tab
    await fsPromises.writeFile(booksFilePath, content);
}

export const getAllUsers = async (): Promise<User[]> => {
    const content = await fsPromises.readFile(usersFilePath, 'utf-8'); //  '[{id,name,price},{id...},{},{}]'
    return JSON.parse(content);
}

export const saveAllUsers = async (users: User[]): Promise<void> => {
    const content = JSON.stringify(users, undefined, 4)// 4 = number of spaces for each tab
    await fsPromises.writeFile(usersFilePath, content);
}
