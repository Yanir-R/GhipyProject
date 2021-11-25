
import '../GiphySearchAPI.css';

function Paginate({ props, itemsTotal, pageSelected, currentPage, setCurrentPage, itemPerPage }: any) {
    let gifs = [];
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;

    if (rightSide > itemsTotal) rightSide = itemsTotal;
    for (let number = leftSide; number <= rightSide; number++) {
        gifs.push(
            <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={() => { pageSelected(number) }}>
                {number}
            </div>,
        );
    }


    const nextPage = () => {
        if (currentPage < itemsTotal) {

            pageSelected(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            pageSelected(currentPage - 1)

        }
    }

    const paginationRender = (

        <div className="flex-paginate-container">
            <div className="row-paginate">
                <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
                {gifs}
                <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
            </div>
        </div >


    );
    return (paginationRender);
}



export default Paginate








// import React from "react";
// import '../GiphySearchAPI.css';


// const Paginate = (props: any,
//     paginationNumber: any,
//     totalItems: any,
//     itemsPerPage: any,
//     currentPage: any,
//     pageSelected: any) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav >
//             <div>

//                 <ul className='pagination' >
//                     {pageNumbers.map(number => {
//                         let classes = "page-item ";
//                         if (number === props.currentPage) {
//                             classes += "active";
//                         }

//                         return (
//                             <li className={classes}>
//                                 <a
//                                     onClick={() => props.pageSelected(number)}
//                                     href="!#"
//                                     className="page-link"
//                                 >
//                                     {number}
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Paginate;