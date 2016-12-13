import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';

export default function (ComposedComponent, options = {}) {
    class AuthenticatedComponent extends Component {
        static propTypes = {
            isAuthenticated: PropTypes.bool
        };

        constructor(props) {
            super(props);

            this.redirectPath = options.redirect || '/login';
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
                history.push(path === '/' ? this.redirectPath : `${this.redirectPath}?return=${path}`);
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
