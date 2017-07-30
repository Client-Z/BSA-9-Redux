import React, {Component}  from  "react";
import {connect} from 'react-redux';
import * as actions from '../actions/userActions';
import {bindActionCreators} from 'redux';


class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            placeholder: 'write here...'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }

    handleUserNameChange(event){
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        let name = this.state.name;

        if( name.length < 2 ) {
            this.setState({ placeholder: "Write your name, please!"});
            return ;
        }

        this.props.add({ name: name, id: Date.now()});
        this.setState({name: '', placeholder: "Write your name, please!"})
    }

    render() {
        return (
            <form className="createUserForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="inputName"
                    placeholder={'write here...' || this.state.placeholder}
                    value={this.state.name}
                    onChange={this.handleUserNameChange}
                />
                <input type="submit" value="Add" className="buttonSubmit" />
            </form>
        )
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
const UserAddConnected = connect(mapStateToProps, mapDispatchToProps)(UserAdd);
export default UserAddConnected;
