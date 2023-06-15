public class Capsule {

    public id:number;
    public type:string;
    public price:number;
    public strength:number;


    public constructor(capsule: Capsule) {
        this.id = capsule.id;
        this.price = capsule.price;
        this.strength = capsule.strength;
        this.type = capsule.type;
        
    }
}

export default Capsule;