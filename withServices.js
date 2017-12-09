import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withServices = mapServicesToProps => ChildComponent => {
    class WrappedComponent extends Component {
        render() {
            return (
                <ChildComponent
                    {...mapServicesToProps(this.context.services)}
                />
            );
        }
    }

    WrappedComponent.contextTypes = {
        services: PropTypes.object
    };

    return WrappedComponent;
}

export default withServices;