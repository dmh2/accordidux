/**
 * Created by dave.held on 8/9/16.
 */
import { connect } from 'react-redux';
import { PanelSetView } from '../views/PanelSetView';
import { togglePanel } from '../actions';

export const PanelSet = connect(
    function mapStateToProps(state) {
        return { panels: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            togglePanel: id => dispatch(togglePanel(id))
        };
    }
)(PanelSetView);