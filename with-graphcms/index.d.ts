interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: Array<{
    id: string;
    url: string;
  }>;
}
