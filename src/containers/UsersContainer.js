import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsersList from '../components/Users/UsersList';
import {bindActionCreators} from 'redux';
import * as usersActions from '../actions/usersActions';

class UsersContainer extends Component {
    componentWillMount() {
        this.props.actions.loadUsers();
    }

    render() {
        return(
            <UsersList
                users={this.props.users}
                onSave={this.props.actions.updateUser}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);