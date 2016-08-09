import { connect } from 'react-redux';
import * as components from './components';
// import { Panel } from './components';
import { addTodo, toggleTodo, addPanel, togglePanel } from './actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(components.TodoList);

export const PanelList = connect(
    function mapStateToProps(state) {
        return { panels: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            // addPanel: panelData => dispatch(addPanel(panelData)),
            togglePanel: id => dispatch(togglePanel(id))
        };
    }
)(components.PanelList);

// export const PanelContainer = connect(
//     function mapStateToProps(state,) {
//         return { panelData: state };
//     },
//     function mapDispatchToProps(dispatch) {
//         return {
//             togglePanel: id => dispatch(togglePanel(id))
//         };
//     }
// )(components.Panel);