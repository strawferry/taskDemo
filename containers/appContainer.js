import React from 'react';


import Task from '../Task';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as onSubmitAction from '../actions/action';

class appContainer extends React.Component {

    render() {
        return (
            <Task {...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    const { sub } = state;
    return {
        sub
    };
};

const mapDispatchToProps = (dispatch) => {
    const subActions = bindActionCreators(onSubmitAction, dispatch);
    return {
        subActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(appContainer);

