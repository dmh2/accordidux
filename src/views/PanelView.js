import React from 'react';

export function PanelView(props) {
    const { clickCallback, panelData } = props;
    const handleHeaderClick = id => event => clickCallback(id);

    const panelClassName = panelData.isOpen ? "tp-flex-container tp-flex-direction-column test-row-open " : "test-row-closed tp-flex-direction-column" ;
    return (
        <div className={panelClassName} key={panelData.id}>
            <div className="test-panel-row-header" onClick={handleHeaderClick(panelData.id)}>
                {panelData.header}
            </div>
            <div className="test-panel-row-content tp-flex-full-size">
                {panelData.content}
            </div>
        </div>
    );
}