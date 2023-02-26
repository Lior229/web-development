class Jeans extends Clothing {
    public constructor(public brand: string, public price: number, public length: number) {
        super(brand, price);
    }

    public display(): void {
        super.display();
        console.log(this.length);
    }
}