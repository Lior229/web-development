class Motorcycle extends Vehicle {
    public wheels: number;

    public constructor(manufacturer: string, model: string, plateNum: string, wheels: number) {
        super(manufacturer, model, plateNum);
        this.wheels = wheels;
    }

    public display(): void {
        console.log(this.wheels);
    }


    public tune(): void {
        console.log('tune motorcycle...')
    }

}