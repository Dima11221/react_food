import style from "../Pagination/style.module.scss";

interface IPagesProps {
	currentPage: number,
	pageCount: number;
	setCurrentPage: (n: number) => void,
}

const Pagination = ({currentPage, pageCount, setCurrentPage}: IPagesProps) => {
	// const {currentPage, pageCount} = props

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1)
	}

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1)
	}

	return (
		<div className={style.pagesList}>
			<div className={`${style.btnsWrapper}`}>
				<button
					className={`${style.btn} ${style.btnReset}`}
					onClick={handlePrevPage}
					disabled={currentPage === 1}
				>
					Previous Page
				</button>
				<button
					className={`${style.btn} ${style.btnReset}`}
					onClick={handleNextPage}
					disabled={currentPage === pageCount}
				>
					Next Page
				</button>
			</div>
			<span>{currentPage} of {pageCount}</span>
		</div>
	)
}

export { Pagination }
