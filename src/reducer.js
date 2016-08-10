import { List, Map } from 'immutable';

const init = List([]);

export default function(panels=init, action) {
    switch(action.type) {
        case 'ADD_PANEL':
            return panels.push(Map(action.payload));
        case 'TOGGLE_PANEL':
            return panels.map(panel => {
                if(panel.get('id') === action.payload) {
                    return panel.update('isOpen', isOpen => !isOpen);
                } else {
                    return panel;
                }
            });
        default:
            return panels;
    }
}