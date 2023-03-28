export const getPageNumbers = (lastPage: number) => {
	const pageNumbers = []
	for (let i = 1; i <= lastPage; ++i) {
		pageNumbers.push(i)
	}
	return pageNumbers
}
