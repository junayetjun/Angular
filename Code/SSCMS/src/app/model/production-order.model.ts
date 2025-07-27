export interface ProductionOrder {
    id?: string;
    productId: string;
    quantity: number;
    status: 'Pending' | 'In Production' | 'Completed';
    createdAt: string;
    warehouseAllocations: WarehouseAllocation[];
}

export interface WarehouseAllocation {
    warehouseId: string;
    materialId: string;
    quantity: number;
}
