
export interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string;
    image: {
        asset: {
            _ref : string;
            _type : "image";
        }
    };
    description: string;
    available: boolean;
  }