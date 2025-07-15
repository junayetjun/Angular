
export class AddpartsModule {
  id?: string;
  companyName: string;
  partsName: string;
  price: string;


  constructor(id: string, companyName: string,
    partsName: string, price: string
  ) {
    this.id = id;
    this.companyName = companyName;
    this.partsName = partsName;
    this.price = price;

  }

}
