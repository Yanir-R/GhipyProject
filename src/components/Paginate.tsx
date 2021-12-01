
import '../GiphySearchAPI.css';

function Paginate({ itemsTotal, pageSelected, currentPage }: any) {
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