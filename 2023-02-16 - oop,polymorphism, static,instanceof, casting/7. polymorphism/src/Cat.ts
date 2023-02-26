class Cat {
    public constructor(public name: string, public age: number) { };

    public display(): void {
        console.log(this.name);
        console.log(this.age);
    }
}