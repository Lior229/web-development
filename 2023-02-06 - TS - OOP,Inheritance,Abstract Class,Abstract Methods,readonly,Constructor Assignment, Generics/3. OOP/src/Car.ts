class Car extends Vehicle {
    public seats: number;

    public constructor(manufacturer: string, model: string, plateNum: number, color: string, seats: number) {
        super(manufacturer, model, plateNum, color);
        this.seats = seats;
    }

    public display(): void {
        super.display();
        console.log(this.seats);
    }

    public tune(): void {
        console.log('using car engine')
    }

}