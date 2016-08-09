import { List, Map } from 'immutable';

const uid = () => Math.random().toString(34).slice(2);

const init = List([]);

export default function(panels=init, action) {
    switch(action.type) {
        // case 'ADD_TODO':
        //     return panels.push(Map(action.payload));
        // case 'TOGGLE_TODO':
        //     return panels.map(t => {
        //         if(t.get('id') === action.payload) {
        //             return t.update('isDone', isDone => !isDone);
        //         } else {
        //             return t;
        //         }
        //     });
        case 'ADD_PANEL':
            return panels.push(Map(action.payload));
        case 'TOGGLE_PANEL':
            return panels.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isOpen', isOpen => !isOpen);
                } else {
                    return t;
                }
            });
        default:
            return panels;
    }
}