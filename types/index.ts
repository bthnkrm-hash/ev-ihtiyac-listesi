export type ShoppingItem = {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  unit: string;
  completed: boolean;
};

export type StockItem = {
  productId: string;
  quantity: number;
  unit: string;
};
