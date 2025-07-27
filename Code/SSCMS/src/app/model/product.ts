export interface Product {
    id?: string;
    name: string;
    description: string;
    components: ProductComponent[]; // list of required raw materials
}

export interface ProductComponent {
    materialId: string;
    quantity: number;
}
