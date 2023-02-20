
class WildKitten extends Kitten {

    public territory: string;

    constructor(name: string, age: number, color: string, territory: string) {
        super(name, age, color);

        this.territory = territory;
    }

    public hunting(): void {
        document.write(this.name + 'hunting...')
    }

    public display() {
        // super.display();
        console.log(this.territory)
    }


}