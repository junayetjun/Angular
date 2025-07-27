export interface StockTransfer {
    id?: string;
    materialId: string;
    fromWarehouseId: string;
    toWarehouseId: string;
    quantity: number;
    date: string; // ISO string
}
