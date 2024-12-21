export interface ProductDetails {
    id: number;
    name: string;
    color: string;
    colorName: string;
    price: number;
    image: string[];
    sizes: Size[];
}

export interface Size {
    us: string;
    available: boolean;
}

export interface Product {
    id: number;
    name: string;
    subname: string;
    description: string;
    price: number;
    productDetails: ProductDetails[];
}