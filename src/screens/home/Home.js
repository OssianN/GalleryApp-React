import React from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Footer from '../../components/footer/Footer';

const Home = (props) => {
    return (
        <div>
            <Header />
            <Search handleSearch={props.handleSearch} />
            <Footer />
        </div>
    )
}

export default Home;
