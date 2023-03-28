import Button from '@/shared/ui/Button/Button'
import clsx from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Pagination.module.css'
import { getPageNumbers } from './getPageNumbers'

interface IPagination {
	setCurrentPage: Dispatch<SetStateAction<number>>
	setFetching: Dispatch<SetStateAction<boolean>>
	currentPage: number
}

const Pagination: FC<IPagination> = ({
	setCurrentPage,
	setFetching,
	currentPage,
}) => {
	const handlePaginate = (number: number) => {
		setCurrentPage(number)
		setFetching(true)
	}

	console.log(currentPage)

	const prevPage = () => {
		if (currentPage !== 1) {
			setFetching(true)
			setCurrentPage(prev => prev - 1)
		}
	}

	const nextPage = () => {
		if (currentPage !== 5) {
			setFetching(true)
			setCurrentPage(prev => prev + 1)
		}
	}

	return (
		<div className={styles.pagination}>
			<Button className={styles.move} onClick={prevPage}>
				{'<'}
			</Button>
			<div className={styles.numbers}>
				{getPageNumbers(5).map((number: number) => (
					<Button
						key={number}
						onClick={() => handlePaginate(number)}
						className={clsx(styles.number, {
							[styles.active]: currentPage === number,
						})}
					>
						{number}
					</Button>
				))}
			</div>
			<Button className={styles.move} onClick={nextPage}>
				{'>'}
			</Button>
		</div>
	)
}

export default Pagination
