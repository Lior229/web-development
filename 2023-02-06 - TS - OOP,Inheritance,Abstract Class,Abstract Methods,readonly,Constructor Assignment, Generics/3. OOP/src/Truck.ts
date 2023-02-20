class Truck extends Vehicle implements Repair {

    public maxWeight: number;
    public engineHeat: number;

    public constructor(manufacturer: string, model: string, plateNum: number, color: string, maxWeight: number) {
        super(manufacturer, model, plateNum, color);
        this.maxWeight = maxWeight;
    }

    public display(): void {
        super.display();
        console.log(this.maxWeight);
    }


    public tune(): void {
        console.log('using car engine tune...')
    }

    public replaceOil(): void {
        console.log('replace oil')
    }
    public checkWheels(): void {
        console.log('checkWheels checkWheels')
    }


}