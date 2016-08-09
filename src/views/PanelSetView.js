import React from 'react';
import { PanelView } from '../views/PanelView' ;

export function PanelSetView(props) {
    const { panels, togglePanel} = props;
    const handlePanelClick = id => togglePanel(id);

    return (
        <div className='floxid-container floxid-column'>
            {panels ? panels.map(panelData => (
                <PanelView panelData={panelData.toJS()} clickCallback={handlePanelClick} key={panelData.get('id')}/>
            )) : [(<span>no panels...</span>)]}
        </div>
    );
}