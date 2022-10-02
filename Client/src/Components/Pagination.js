import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { changePage } from "../Reducers/selectedPageReducer";
const Page = ({ number }) => {
    const currentPage = useSelector(state => state.pageNo)
    const dispatch = useDispatch();
    const paginate = (number) => {
        return dispatch(changePage(number))
    }

    if (number === currentPage) {
        return <li key={number} onClick={() => paginate(number)} className='active page-item'>
            {number}
        </li>
    }
    else {
        return <li key={number} onClick={() => paginate(number)} className='page-item'>
            {number}
        </li>
    }
}
const Pagination = () => {

    let total = useSelector(state => state.employeesToShow.length)
    const currentPage = useSelector(state => state.pageNo)
    const dispatch = useDispatch();
    total = Math.ceil(total / 10)
    let pageNumbers = [];

    const paginate = (number) => {
        return dispatch(changePage(number))
    }
    for (var i = 1; i <= total; i++) {
        pageNumbers.push(i);
    }
    const moveLeft = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        }
    }
    const moveRight = () => {
        if (currentPage < total) {
            paginate(currentPage + 1)
        }
    }


    return (
        <nav>
            <ul className='pagination'>

                <li onClick={moveLeft} className='page-item'>
                    &laquo;
                </li>
                {pageNumbers.map(number => {
                    return <Page key={number} number={number} />
                })}
                <li onClick={moveRight} className='page-item'>
                    &raquo;
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;