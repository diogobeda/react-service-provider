import { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceProvider extends Component {
    getChildContext() {
        const { children, ...rest } = this.props;
        return { services: rest };
    }

    render() {
        return this.props.children;
    }
}

ServiceProvider.childContextTypes = {
    services: PropTypes.object
};

export default ServiceProvider;