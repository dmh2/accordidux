/**
 * Created by dave.held on 8/9/16.
 */
import { connect } from 'react-redux';
import { PanelSetView } from '../views/PanelSetView';
import { togglePanel } from '../actions';

export const PanelSet = connect(
    function mapStateToProps(state,ownProps) {
        // return { panels: state };
        return { panels: state[ownProps.panelSetId].panels,
            panelSetId: ownProps.panelSetId } ;
        // return { panels: state.filter((panel) => { return panel.panelSetId === panelSetId}) };
    },
    function mapDispatchToProps(dispatch,ownProps) {
        return {
            togglePanel: (id,panelSetId) => {dispatch(togglePanel(id,panelSetId))}
        };
    }
)(PanelSetView);