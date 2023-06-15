import Book from "../4-models/Book";
import { v4 as uuid } from 'uuid';

export const saveNewImageToImages = async (book: Book) => {
    if (book.image) {
        const extension = book.image.name.split('.').pop();
        book.imageName = `${uuid()}.${extension}`;
        await book.image.mv(`./src/1-assets/images/${book.imageName}`);
    }
}