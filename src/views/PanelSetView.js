import React from 'react';
import { PanelView } from '../views/PanelView' ;

export function PanelSetView(props) {
    const { panels, togglePanel} = props;
    const handlePanelClick = id => togglePanel(id);

    return (
        <div className='test-accordion-container tp-flex-container tp-flex-direction-column tp-flex-full-size'>
            {panels ? panels.map(panelData => (
                <PanelView panelData={panelData.toJS()} clickCallback={handlePanelClick} key={panelData.get('id')}/>
            )) : [(<span>no panels...</span>)]}
        </div>
    );
}