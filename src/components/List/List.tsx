import { IProduct, IProducts } from '@/shared/types/IProducts'
import Loader from '@/shared/ui/Loader/Loader'
import Title from '@/shared/ui/Title/Title'
import { FC, useEffect, useState } from 'react'
import styles from './List.module.css'
import Pagination from './Pagination/Pagination'
import Product from './Product/Product'

const List: FC = () => {
	const [products, setProducts] = useState<IProducts | null>(null)
	const [loader, setLoader] = useState(false)
	const [fetching, setFetching] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const skip = currentPage === 1 ? 0 : currentPage * 10
		if (fetching) {
			setLoader(true)
			fetch(`https://dummyjson.com/products?skip=${skip}&limit=10`)
				.then(response => response.json())
				.then(json => {
					setProducts(json)
				})
				.finally(() => {
					setLoader(false)
					setFetching(false)
				})
		}
	}, [fetching])

	const productsList = products?.products

	return (
		<div>
			<Title>List of products</Title>
			{loader ? (
				<Loader />
			) : (
				<div>
					<div className={styles.products}>
						{productsList
							? products.products.map((product: IProduct) => (
									<div key={product.id}>
										<Product product={product} />
									</div>
							  ))
							: null}
					</div>
					<Pagination
						setCurrentPage={setCurrentPage}
						setFetching={setFetching}
						currentPage={currentPage}
					/>
				</div>
			)}
		</div>
	)
}

export default List
