import React, {Component}  from  "react";
import 'babel-polyfill'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/userActions.js";

import UserAdd from './userAdd';
import UserList from './userList';

import '../styles/users.css';


class UsersContainer extends Component {
/*    constructor(props) {
        super(props);

        this.state = {
            userList: []
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }*/


/*    handleUserSubmit(user) {
        let updateUsers = this.state.userList;
        user.id = Math.random() * 10000;
        console.log(user.id);
        updateUsers.push(user);
        this.setState({userList: updateUsers});
    }*/

    render() {
        return (
            <div className="container">
                <UserAdd />
                <UserList userList={this.props.stateFromReducer.users} deleteUser={this.props.deleteUser}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UsersContainerConnected = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UsersContainerConnected;