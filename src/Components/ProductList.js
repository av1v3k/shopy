import React from 'react';
import Product from './Product';

function ProductList(props) {
    return (
        <ul>
            {
                props.data && props.data.length ?
                    props.data.map((item, idx) => {
                        return (
                            <Product key={item['name'] + idx}
                                name={item.name}
                                actual={item.price.actual}
                                display={item.price.display}
                                addData={props.addData} />)
                    })
                    :
                    <></>
            }
        </ul>
    );
}

export default ProductList;
