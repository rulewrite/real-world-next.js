interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: Array<{
    id: string;
    url: string;
  }>;
  description: string;
}

type CartProduct = Pick<Product, 'id' | 'name' | 'price' | 'slug'>;
