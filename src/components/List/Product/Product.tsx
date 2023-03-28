import { IProduct } from '@/shared/types/IProducts'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Product.module.css'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div>
				<Image
					src={product.thumbnail}
					alt={product.title}
					width={100}
					height={100}
					className={styles.img}
				/>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div>{product.brand}</div>
			<div className={styles.brand}>
				<div>{product.brand === 'Apple' ? 'TOP' : 'NEW'}</div>
			</div>
		</div>
	)
}

export default Product
