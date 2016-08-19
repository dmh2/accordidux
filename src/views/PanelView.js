import React from 'react';

export function PanelView(props) {
    const { clickCallback, panelData } = props;
    const panelSetId = panelData.panelSetId ;
    // const handleHeaderClick = () => clickCallback(panelData.id, panelSetId);
    const handleHeaderClick = (id, panelSetId) => event => clickCallback(id, panelSetId);

    const panelClassName = panelData.isOpen ? "tp-flex-container tp-flex-direction-column test-row-open " : "test-row-closed tp-flex-direction-column" ;
    return (
        <div className={panelClassName} key={panelData.id}>
            <div className="test-panel-row-header" onClick={handleHeaderClick(panelData.id, panelData.panelSetId)}>
                {panelData.header}
            </div>
            <div className="test-panel-row-content tp-flex-full-size tp-flex-container tp-flex-direction-row">
                {panelData.content}
            </div>
        </div>
    );
}