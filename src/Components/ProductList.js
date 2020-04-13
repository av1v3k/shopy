import React from 'react';
import Product from './Product';

function ProductList(props) {
    return (
        <ul>
            {
                props.data && props.data['items'] ?
                    props.data['items'].map((item, idx) => {
                        return (
                            <Product key={item['name'] + idx}
                                name={item.name}
                                actual={item.price.actual}
                                display={item.price.display} />)
                    })
                    :
                    <></>
            }
        </ul>
    );
}

export default ProductList;
