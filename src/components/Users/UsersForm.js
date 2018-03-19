import React, {Component} from 'react';
import {
    Modal,
    Button,
    Form,
    FormGroup,
    FormControl
} from 'react-bootstrap';
import './UsersForm.css';

class UsersForm extends Component {
    render() {
        const user = this.props.user || {};

        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User#{user.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="users-form">
                        <FormGroup>
                            <FormControl
                                type="text"
                                name="name"
                                value={user.name || ""}
                                placeholder="Name"
                                onChange={this.props.onChange}
                            />
                            <FormControl
                                type="email"
                                name="email"
                                value={user.email || ""}
                                placeholder="Email"
                                onChange={this.props.onChange}
                            />
                            <FormControl
                                type="text"
                                name="city"
                                value={user.address ? user.address.city : ""}
                                placeholder="City"
                                onChange={this.props.onAddressChange}
                            />
                            <FormControl
                                type="text"
                                name="phone"
                                value={user.phone || ""}
                                placeholder="Phone"
                                onChange={this.props.onChange}
                            />
                            <FormControl
                                type="text"
                                name="website"
                                value={user.website || ""}
                                placeholder="Website"
                                onChange={this.props.onChange}
                            />
                            <FormControl
                                type="text"
                                name="name"
                                value={user.company ? user.company.name : ""}
                                placeholder="Company"
                                onChange={this.props.onCompanyChange}
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UsersForm;
