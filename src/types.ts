export type Billboard = {
  id: number;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: number;
  name: string;
  billboardId: number;
  billboard: Billboard;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: Category;
  color: Color;
  images: string[];
  size: Size;
};

export type Color = {
  id: number;
  name: string;
  value: string;
};

export type Size = {
  id: number;
  name: string;
  value: string;
};

export type Store = {
  id: number;
  name: string;
  url: string;
  userId: number;
  currency: string;
};
