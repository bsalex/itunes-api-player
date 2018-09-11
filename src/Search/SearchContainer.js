import {connect} from 'react-redux';
import SearchComponent from './SearchComponent';
import {searchTextChange} from './SearchActions';

function mapStateToProps(state) {
    return {
        value: state.search.text
    };
}

const mapDispatchToProps = {
    onChange: searchTextChange
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);
