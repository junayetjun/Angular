export interface ProductModel {
  productType: string;
  shoulder: string[];
  size: string[];
  quantity: string[]; // Or number[] if you handle casting
  color: string[];
}
