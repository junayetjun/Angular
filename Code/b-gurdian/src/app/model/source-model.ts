

export class SourceModel{
    id?: string;
    sourceName: string;
    photo: string;

    constructor(id: string, sourceName: string, photo: string){
        this.id = id;
        this.sourceName = sourceName;
        this.photo = photo;
    }
}