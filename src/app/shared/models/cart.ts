export interface ICart {
  items?: ICartItem[];
}

export interface ICartItem {
  productId?: string;
  title?: string;
  quantity?: number;
}
