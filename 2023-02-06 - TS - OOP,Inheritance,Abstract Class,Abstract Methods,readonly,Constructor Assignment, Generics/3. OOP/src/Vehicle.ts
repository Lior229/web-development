abstract class Vehicle {
    public manufacturer: string;
    public model: string;
    public plateNum: number;
    public color: string;

    public constructor(manufacturer: string, model: string, plateNum: number, color: string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.plateNum = plateNum;
        this.color = color;
    }


    public display(): void {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.plateNum);
        console.log(this.color);
    }

    public abstract tune(): void;






}