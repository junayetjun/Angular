
export class VehicleModule {

  id: string;
  vehicleName: string;
  addParts: string[];


  constructor(id: string, vehicleName: string, addParts: string[] = []) {
    this.id = id;
    this.vehicleName = vehicleName;
    this.addParts = addParts;
  }


}
