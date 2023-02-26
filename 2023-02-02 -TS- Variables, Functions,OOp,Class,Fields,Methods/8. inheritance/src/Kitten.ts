class Kitten {


    public name: string;
    public age: number;
    public color: string;
    private chipID: number;


    constructor(otherName: string, age: number, color: string) {
        this.name = otherName;
        this.age = age;
        this.color = color;
        this.chipID = Math.floor(Math.random() * 100);
    }

    public sleep(): void {

        console.log(`${this.name} is sleeping... <br>`)
    }

    public display(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.chipID);
    }

    public happyBirthDay() {
        this.age++;
    }
}