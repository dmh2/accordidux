import React from 'react';
import { PanelItemView } from './views/PanelItemView';

// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

// export function addPanelSet(panelData) {
//     let createPanelItem = (content) => {
//         let contents = [] ;
//         for(let i=0;i<content.length;i++){
//              contents.push((<PanelItemView content={content[i]}/>)) ;
//         }
//         return contents ;
//     };
//
//     return {
//         type: 'ADD_PANEL_SET',
//         payload: {
//             id: uid(),
//             isOpen: panelData.isOpen,
//             header: panelData.header,
//             // content: panelData.content
//             content: createPanelItem(panelData.content)
//         }
//     };
// }

export function addPanel(panelData, panelSetId) {
    let createPanelItem = (content) => {
        let panelItemCount = content.length;
        let contents = [] ;

        for(let i=0;i<panelItemCount;i++){
             contents.push((<PanelItemView content={content[i]} key={'panel' + i}/>)) ;
        }

        return contents ;
    };

    return {
        type: 'ADD_PANEL',
        payload: {
            panelSetId: panelSetId,
            id: uid(),
            isOpen: panelData.isOpen,
            header: panelData.header,
            // content: panelData.content
            content: createPanelItem(panelData.content)
        }
    };
}

export function togglePanel(id, panelSetId) {
    return {
        type: 'TOGGLE_PANEL',
        payload: {id:id,panelSetId:panelSetId}
    }
}