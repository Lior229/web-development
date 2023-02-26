class Product {

    public name: string;
    public price: number;
    public description: string;
    public discount: number;
    public size?: number  // the same as size: number | undefined 

    public constructor(name, price, description, discount, size?: number) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.discount = discount;
        this.size = size ?? 10; // whether i have null or undefined 

    }

    public display(): void {
        console.log(this.name);
        console.log(this.size);
        console.log(this.description);
        console.log(this.discount);
        console.log(this.price);
    }

}

