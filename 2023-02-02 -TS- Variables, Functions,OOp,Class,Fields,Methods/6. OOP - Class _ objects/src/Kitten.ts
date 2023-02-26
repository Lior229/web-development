class Kitten {

    //Properties (fields/ data members)
    public name: string;
    public age: number;
    public color: string;
    private chipID: number;


    public constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.chipID = Math.floor(Math.random() * 1000);

    }

    public sleep(): void {

        document.write(this.name + " is sleeping..." + "<br>")
    }
    public display(): void {
        document.write(`Name: ${this.name} <br>`);
        document.write(`Age: ${this.age} <br>`);
        document.write(`Color: ${this.color} <br>`);
        document.write(`ChipId: ${this.chipID} <br>`);
    }
    public happyBirthday(): void {
        this.age++;
    }

}