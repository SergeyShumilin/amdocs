import React, {Component} from 'react';
import './UsersList.css';
import './UsersForm';
import UsersForm from "./UsersForm";

class UsersList extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);

        this.state = {
            show: false,
            user: null
        };
    }

    handleClose() {
        this.props.onSave(this.state.user);
        this.setState({ show: false });
    }

    handleShow(user) {
        this.setState({ show: true, user });
    }

    handleChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleAddressChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                address: {
                    ...this.state.user.address,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleCompanyChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                company: {
                    ...this.state.user.company,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(user =>
                    <div
                        key={"user" + user.id}
                        className="user-box"
                        onDoubleClick={this.handleShow.bind(null, user)}
                    >
                        <div className="user-box-name">{user.name}</div>
                        <div className="user-box-info">
                            <div>{user.email}</div>
                            <div>{user.address.city}</div>
                            <div>{user.phone}</div>
                            <div>{user.website}</div>
                            <div>{user.company.name}</div>
                        </div>
                    </div>
                )}
                <UsersForm
                    show={this.state.show}
                    user={this.state.user}
                    onClose={this.handleClose}
                    onChange={this.handleChange}
                    onAddressChange={this.handleAddressChange}
                    onCompanyChange={this.handleCompanyChange}
                />
            </div>
        );
    }
}

export default UsersList;
