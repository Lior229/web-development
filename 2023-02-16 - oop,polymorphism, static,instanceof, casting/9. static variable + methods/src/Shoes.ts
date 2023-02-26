class Shoes extends Clothing {

    public static shoesFileName: string = 'shoes.txt';

    public constructor(brand: string, price: number, public size: number) {
        super(brand, price);
    }

    public display(): void {
        super.display();
        console.log(this.size);
    }

    public static shoesDescription(): void {
        console.log('we have many shoes in our store')
    }
}