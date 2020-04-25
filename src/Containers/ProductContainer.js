import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { dataLoadingAction, dataLoadedAction } from '../actions';
import ProductList from '../Components/ProductList';
import Loading from '../Components/Loading';

function ProductContainer(props) {


    const fetchData = () => {
<<<<<<< HEAD
        // fetch('https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380')
        fetch('https://jsonplaceholder.typicode.com/users')
        // fetch('../data/sample.json')
=======
        fetch('https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380')
        //fetch('../data/sample.json')
>>>>>>> 04c2b9c6fc973d30991b4bfce01e590d290b2ef6
            .then((resp) => resp.json())
            .then((data) => {
                props.setLoaded(false);
                props.setData(data);
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <article>
            {
                props.isLoading ?
                    <Loading isLoading={props.isLoading} />
                    :
                    <ProductList data={props.loadedData} />

            }
        </article>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.productReducer.loading,
        loadedData: state.productReducer.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoaded: load => {
            dispatch(dataLoadingAction(load))
        },
        setData: data => {
            dispatch(dataLoadedAction(data))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
