export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboardId: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  isFeatured: boolean;
  category: Category;
  color: Color;
  images: Image[];
  size: Size;
};

type Color = {
  id: string;
  name: string;
  value: string;
};

export type Image = {
  id: string;
  url: string;
};

type Size = {
  id: string;
  name: string;
  value: string;
};
