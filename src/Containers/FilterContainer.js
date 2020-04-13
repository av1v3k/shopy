import React from 'react';
import { connect } from 'react-redux';
// import { searchInputAction } from '../actions';
import FilterComp from '../Components/FilterComp';
import SortComp from '../Components/SortComp';
import '../css/FilterContainer.css';

function FilterContainer({ ...props }) {

    const _onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name);
    }

    return (
        <div className="se-filter">
            <form onSubmit={_onSubmit} name="filterform">
                <b>Filter:</b><FilterComp onSearch={props.onSearch} search={props.search} />
                <b>Sort:</b><SortComp cartCount={props.search} />
                <button type="submit">Apply</button>
                <button type="button">Cancel</button>
            </form>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         search: state.headerReducer.text
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onSearch: text => {
//             dispatch(searchInputAction(text));
//         }
//     };
// };

export default connect(null, null)(FilterContainer);
