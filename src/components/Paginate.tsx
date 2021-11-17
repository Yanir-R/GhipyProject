import React from "react";
import '../App.css';


const Paginate = (props: any,
    paginationNumber: any,
    totalItems: any,
    itemsPerPage: any,
    currentPage: any,
    pageSelected: any) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <div>

                <ul className='pagination' >
                    {pageNumbers.map(number => {
                        let classes = "page-item ";
                        if (number === props.currentPage) {
                            classes += "active";
                        }

                        return (
                            <li className={classes}>
                                <a
                                    onClick={() => props.pageSelected(number)}
                                    href="!#"
                                    className="page-link"
                                >
                                    {number}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Paginate;