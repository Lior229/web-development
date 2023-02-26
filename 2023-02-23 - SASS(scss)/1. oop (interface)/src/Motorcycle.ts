class Motorcycle extends Vehicle {
    public wheels: number;

    public constructor(manufacturer: string, model: string, plateNum: number, color: string, wheels: number) {
        super(manufacturer, model, plateNum, color);
        this.wheels = wheels;
    }


    public tune(): void {
        console.log('using car engine tune...')
    }
}