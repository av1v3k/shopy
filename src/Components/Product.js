import React from 'react';

function Product(props) {
    let discount = Number.parseFloat(((props.display - props.actual) / props.display) * 100).toFixed(2);
    return (
        <li className="se-product-wrapper">
            <div className="se-product">
                <div className="se-product--imageholder">

                </div>
                <div className="se-product--dataholder">
                    <span className="se-product--actual">{props.actual}</span>
                    <span className="se-product--display">{props.display}</span>
                    <span className="se-product--discount">{`${discount} % off`}</span>
                </div>
                <button type="button"
                    className="se-product--add"
                    onClick={() => {
                        return props.addData(
                            {
                                name: props.name
                            }
                        )
                    }}
                >Add to cart</button>
            </div>
        </li>
    );
}

export default Product;
