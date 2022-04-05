import React from 'react';
import '../styles/Pagination.css';

function Pagination({ currentPage, processRequestByPage, totalPages }) {
    const pagesNumbers = new Array(totalPages).fill(0)
        .map((item, ind) => ++ind);

    const handleLeftArrowClick = () => {
        if (currentPage == 1) {
            return;
        }
        processRequestByPage(currentPage - 1);
    };
    const handleRightArrowClick = () => {
        if (currentPage == pagesNumbers.length) {
            return;
        }
        processRequestByPage(currentPage + 1);
    };

    return (
        <div id="pagination">
            { pagesNumbers.length ?
                <button
                    className="arrow"
                    onClick={ handleLeftArrowClick }
                >&lt;</button> : null }
            
            { pagesNumbers.map(pageNumber => 
                <button
                    className={ pageNumber == currentPage ? 'page-number active' : 'page-number' }
                    key={ pageNumber }
                    onClick={ () => processRequestByPage(pageNumber) }
                >
                    { pageNumber }
                </button> )}
                
            { pagesNumbers.length ?
                <button
                    className="arrow"
                    onClick={ handleRightArrowClick }
                >&gt;</button> : null }
        </div>
    );
}

export default Pagination;
