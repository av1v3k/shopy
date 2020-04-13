import React from 'react';

function SortComp() {
    return (
        <div className="se-sort">
            <input type="radio" id="high" name="sortprice" value="0" /> <label htmlFor="high">Price -- High - Low</label>
            <input type="radio" id="low" name="sortprice" value="1" /> <label htmlFor="low">Price -- Low - High</label>
            <input type="radio" id="discount" name="sortprice" value="2" /> <label htmlFor="discount">Price -- Discount</label>
        </div>
    );
}

export default SortComp;
