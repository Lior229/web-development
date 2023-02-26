abstract class Vehicle {

    public manufacturer: string;
    public model: string;
    public plateNum: string;

    public constructor(manufacturer: string, model: string, plateNum: string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.plateNum = plateNum;
    }

    public display(): void {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.plateNum);
    }

    public abstract tune(): void;
}