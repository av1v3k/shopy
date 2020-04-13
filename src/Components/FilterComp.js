import React from 'react';

function FilterComp() {

    const _onChange = (e) => {
        // console.log(e.target.value);
    }

    return (
        <div className="se-range">
            <span className="se-range--minVal">100</span>
            <input type="range" min="100" name="rangeprice" onChange={_onChange} max="100000" />
            <span className="se-range--maxVal">100000</span>
        </div>
    );
}

export default FilterComp;
