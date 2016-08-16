import React from 'react';
import { PanelItemView } from './views/PanelItemView';

// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addPanel(panelData) {
    let createPanelItem = (content) => {
        let contents = [] ;
        for(let i=0;i<content.length;i++){
             contents.push((<PanelItemView content={content[i]}/>)) ;
        }
        return contents ;
    };

    return {
        type: 'ADD_PANEL',
        payload: {
            id: uid(),
            isOpen: panelData.isOpen,
            header: panelData.header,
            // content: panelData.content
            content: createPanelItem(panelData.content)
        }
    };
}

export function togglePanel(id) {
    return {
        type: 'TOGGLE_PANEL',
        payload: id
    }
}