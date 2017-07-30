import React, {Component}  from  "react";
import {connect} from 'react-redux';
import {deleteUser, showCurrentUser} from '../actions/userActions';
import {bindActionCreators} from 'redux';


import User from './user';


class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userItem = this.props.userList.map((elem) => {
            return <User deleteUser={this.props.deleteUser} name={elem.name} id={elem.id} key={elem.id}  />
        });

        return (
            <ul className="user-list">
                { userItem }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        query: state.users.query
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: bindActionCreators(deleteUser, dispatch),
        showCurrentUser: bindActionCreators(showCurrentUser, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);