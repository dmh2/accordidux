// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addPanel(panelData) {
    return {
        type: 'ADD_PANEL',
        payload: {
            id: uid(),
            isOpen: panelData.isOpen,
            header: panelData.header,
            content: panelData.content
        }
    };
}

export function togglePanel(id) {
    return {
        type: 'TOGGLE_PANEL',
        payload: id
    }
}