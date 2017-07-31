import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchUser} from '../actions/userActions';
import {bindActionCreators} from 'redux';


class SearchComponent extends Component {

    render() {
        return (
            <div>
                <form className="input-group search">
                    <input type="text" placeholder="search..."
                           onChange={(e) => this.props.searchUser(e.target.value)}
                           value={this.props.query}/>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        query: state.users.query
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        searchUser: bindActionCreators(searchUser, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

