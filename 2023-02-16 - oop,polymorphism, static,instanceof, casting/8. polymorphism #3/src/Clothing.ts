class Clothing {
    public constructor(public brand: string, public price: number) { }

    public display(): void {
        console.log(this.brand);
        console.log(this.price)
    }
}