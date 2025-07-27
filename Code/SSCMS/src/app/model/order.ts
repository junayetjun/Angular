export interface Order {
    id?: string;
    productId: string;
    quantity: number;
    status: 'Pending' | 'In Production' | 'Completed';
    createdAt: string; // or Date
}
