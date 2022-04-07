import React from 'react';
import '../styles/Pagination.css';

function Pagination({ currentPageNumber, processRequestByPage, totalPages }) {
    const pagesNumbers = new Array(totalPages).fill(0)
        .map((item, ind) => ++ind);

    const handleLeftArrowClick = () => {
        if (currentPageNumber == 1) {
            return;
        }
        processRequestByPage(currentPageNumber - 1);
    };
    const handleRightArrowClick = () => {
        if (currentPageNumber == pagesNumbers.length) {
            return;
        }
        processRequestByPage(currentPageNumber + 1);
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
                    className={ pageNumber == currentPageNumber ? 'page-number active' : 'page-number' }
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
