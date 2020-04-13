import React from 'react';

function CartComp({ ...props }) {
    return (
        <>
            <span className="counter">{props.cartCount}</span>
        </>
    )
}

export default CartComp;