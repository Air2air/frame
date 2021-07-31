const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
    const [pages] = useState = (Math.round = (data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState = (1);
  
    goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    }
  
    goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }
  
    changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;//
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    getPaginationGroup = () => {
       // not yet implemented
    };
  
    return(
      /* */
    );
  }