import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { searchInputAction } from '../actions';
import SearchComp from '../Components/SearchComp';
import CartComp from '../Components/CartComp';
import '../css/HeaderContainer.css';

function HeaderContainer({ ...props }) {

    useEffect(() =>{
        console.log(props.search);
    }, [props.search])


    return (
        <header>
            <SearchComp onSearch={props.onSearch} search={props.search} />
            <CartComp cartCount={props.search} />
        </header>
    )
}

const mapStateToProps = state => {
    return {
        search: state.headerReducer.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: text => {
            dispatch(searchInputAction(text));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
