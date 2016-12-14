import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import login from '../actions/login';
import validator from '../validators';

const { bool, func } = PropTypes;
const defaultErrors = { username: null, password: null };

class Login extends Component {
    state = {
        username: '',
        password: '',
        errors: defaultErrors
    };

    static propTypes = {
        login: func,
        isPending: bool
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                { this.state.errors.username && <span>{ this.state.errors.username }</span> }
                <br />
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                { this.state.errors.password && <span>{ this.state.errors.password }</span> }
                <br />
                <button disabled={this.props.isPending}>Submit</button>
            </form>
        );
    }

    @autobind
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value.trim() });
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        const { username, password } = this.state;
        const state = validator({ username, password });

        if (state.isValid) {
            this.props.login({ username, password });
            this.setState({ errors: { ...defaultErrors } });
        } else {
            this.setState({ errors: { ...defaultErrors, ...state.errors } });
        }
    }
}

const selector = state => {
    return {
        isPending: state.auth.isPending
    };
};

export default connect(selector, { login })(Login);
