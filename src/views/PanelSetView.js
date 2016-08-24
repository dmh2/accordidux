import React from 'react';
import { PanelView } from '../views/PanelView' ;

export function PanelSetView(props) {
    // const { panels, togglePanel} = props;
    const { panels, togglePanel, panelSetId, panelSetStyle} = props;
    const handlePanelClick = (id,panelSetId) => {togglePanel(id,panelSetId)};

    // const buildPanelSets = (panelSets) => {
    //     return
    // }


    return (
        <div
            className='test-accordion-container tp-flex-container tp-flex-direction-column tp-flex-full-size'
            style={panelSetStyle}>
            {panels ? panels.map((panelData) => {
                    // let currentPanelData = panelData.toJS() ;
                    // let currentPanelID = panelData.get('id') ;
                    let currentPanelData = panelData ;
                let currentPanelID = panelData.id ;
                return (<PanelView panelData={panelData} clickCallback={handlePanelClick} key={currentPanelID}/>)
            }) : [(<span>no panels...</span>)]}
        </div>
    );
}