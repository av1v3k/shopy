import React from 'react';
import HeaderContainer from './Containers/HeaderContainer';
import FilterContainer from './Containers/FilterContainer';
import ProductContainer from './Containers/ProductContainer';
import './App.css';

function App() {
    return (
        <>
            <HeaderContainer />
            <FilterContainer />
            <ProductContainer />
        </>
    );
}

export default App;
