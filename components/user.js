import React, {Component}  from  "react";
import {connect} from 'react-redux';


class User extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleDeleteUser() {
        let id = this.props.id;
        this.props.deleteUser(id);
    }

    render() {
        return (
          <li className="user">
            <span>{ this.props.currentUser.name }</span>
              <button onClick={this.handleDeleteUser} className="buttonDelete">Delete User</button>
          </li>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.users.currentUser
    }
};


export default connect(mapStateToProps)(User);