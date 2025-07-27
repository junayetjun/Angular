export interface FinishedProductStock {
    id?: string;
    warehouseId: string;      // Where the product is stored
    productId: string;
    quantity: number;
    sourceWarehouses?: string[];  // ← new field to track source warehouses
}
