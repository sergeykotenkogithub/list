export interface IProducts {
	products: IProduct[]
	total: number
	skip: number
	limit: number
}

export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: Category
	thumbnail: string
	images: string[]
}

export enum Category {
	Laptops = 'laptops',
	Smartphones = 'smartphones',
}
