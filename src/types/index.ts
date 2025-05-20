// Товар

export interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

// Тип оплаты

export type TOrderPayment = 'cash' | 'card';

// Заказ

export interface IOrder {
	items: IProduct[];
	payment: TOrderPayment;
	address: string;
	email: string;
	phone: string;
}

// Квитанция по заказу

export type TOrderInvoice = Omit<IOrder, 'items'> & {
	items: string[];
	total: number;
};

// Шаги оформления заказа

export type TOrderStep = 'shipment' | 'contacts';

// Результат оформления заказа

export interface IOrderResult {
  id: string;
  total: number;
}

// Корзина

export interface ICartModel {
  getItems(): IProduct[];
  addItem(product: IProduct): void;
  removeItem(productId: string): void;
  clear(): void;
  getTotal(): number;
}
