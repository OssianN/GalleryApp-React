import React from 'react';
import Header from '../../components/header/Header';
import CardsGrid from '../../components/cards-grid/CardsGrid';
import Search from '../../components/search/Search';
import Pagination from '../../components/pagination/Pagination';
import Footer from '../../components/footer/Footer';

const SearchResult = (props) => {
  return (
    <div>
      <Header />
      <Search handleSearch={props.handleSearch} />
      <CardsGrid search={props.search} pageNumber={props.page} />
      <Pagination pageNumber={props.handlePage} currentPage={props.page}  />
      <Footer />
    </div>
  )
}
export default SearchResult;
