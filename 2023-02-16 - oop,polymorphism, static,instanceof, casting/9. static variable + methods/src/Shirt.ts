class Shirt extends Clothing {
    public constructor(public brand: string, public price: number, public color: string) {
        super(brand, price);
    }

    public display(): void {
        super.display();
        console.log(this.color);
    }
}