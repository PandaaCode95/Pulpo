
export class Vehicle {

    public id_vehicle:number;
    public marca:string;
    public model:string;
    public color:string; 
    public f_ing:Date;
    public active:boolean;
    
    constructor( id_vehicle:number,marca:string, model:string, color:string, f_ing:Date, active:boolean){
        
        this.id_vehicle = id_vehicle;
        this.marca=marca;
        this.model=model;
        this.color=color;
        this.f_ing=f_ing;
        this.active=active;
    }
}
