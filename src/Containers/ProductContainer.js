import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { dataLoadingAction, dataLoadedAction, cartAddAction } from '../actions';
import ProductList from '../Components/ProductList';
import Loading from '../Components/Loading';

function ProductContainer(props) {


    const fetchData = () => {
        fetch('https://my-json-server.typicode.com/av1v3k/shopy/items')
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

    const _onClickAddData = (data) => {
        debugger;
        if (data) {
            props.putData(data);
        }
    }

    return (
        <article>
            {
                props.isLoading ?
                    <Loading isLoading={props.isLoading} />
                    :
                    <ProductList data={props.loadedData} addData={_onClickAddData} />

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
        },
        putData: (data) => {
            dispatch(cartAddAction(data))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
