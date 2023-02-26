
class Car extends Vehicle {
    public seats: number;

    public constructor(manufacturer: string, model: string, plateNum: string, seats: number) {
        super(manufacturer, model, plateNum);
        this.seats = seats;
    }

    public display(): void {
        console.log(this.seats);
    }

    public tune(): void {
        console.log('tune car...')
    }


}