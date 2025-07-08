
export class District {
    id: string;
    name: string;
    policeStation: string[];

    constructor(id: string, name: string, policeStation: string[] = []){
        this.id = id;
        this.name = name;
        this. policeStation = policeStation;
    }
}