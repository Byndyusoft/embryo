import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';

export default function (ComposedComponent, options = {}) {
    class AuthenticatedComponent extends Component {
        static propTypes = {
            isAuthenticated: PropTypes.bool,
            role: PropTypes.string
        };

        constructor(props) {
            super(props);

            this.redirectTo = options.redirectTo || '/login';
            this.roles = options.roles || [];
        }

        componentWillMount() {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth(isAuthenticated) {
            if (!isAuthenticated) {
                const path = this.props.location.pathname;
                history.push(path === '/' ? this.redirectTo : `${this.redirectTo}?return=${path}`);
            } else if (this.roles.length && this.roles.indexOf[this.props.role] === -1) {
                history.push('/not-found');
            }
        }

        render() {
            return this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null;
        }
    }

    const mapStateToProps = state => {
        const { isAuthenticated, role } = state.auth;
        return { isAuthenticated, role };
    };

    return connect(mapStateToProps)(AuthenticatedComponent);
}
