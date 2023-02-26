class WildCat extends Cat {
    public constructor(public name: string, public age: number, public territory: string) {
        super(name, age);
    };

    public display(): void {
        super.display();
        console.log(this.territory);
    }
}