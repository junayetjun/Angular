export interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
}

export interface PurchaseOrder {
    id?: string;
    orderNumber: string;
    supplier: string;
    date: string; // ISO format
    items: OrderItem[];
    status: 'Draft' | 'Sent' | 'Received' | 'Closed';
}
