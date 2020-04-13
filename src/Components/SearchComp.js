import React from 'react';

class SearchComp extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // this.state = {
        //     cartsearch: ''
        // }
    }

    handleChange(e) {
        this.props.onSearch(e.target.value);
        // this.setState({
        //     'cartsearch': e.target.value
        // })
    }

    _onKeyDown(e) {
        const key = e.keyCode || e.which;
        if(key === 13) {
            this.props.onSearch(e.target.value);
        } else {
            return false;
        }
    }

    render() {
        return (
            <>
                {/* <input type="text" name="cartsearch" onKeyDown={(e) => this._onKeyDown(e)} value={this.props.search} placeholder="Search" /> */}
                <input type="text" name="cartsearch" onKeyDown={(e) => this._onKeyDown(e)} placeholder="Search" />
            </>
        );
    }
}

export default SearchComp;
