import React from 'react';

export function PanelView(props) {
    const { clickCallback, panelData } = props;
    const handleHeaderClick = id => event => clickCallback(id);

    const panelClassName = panelData.isOpen ? "floxid-panel-row-open floxid-column" : "floxid-panel-row-closed floxid-column" ;
    return (
        <div className={panelClassName} key={panelData.id}>
            <div className="floxid-panel-row-header" onClick={handleHeaderClick(panelData.id)}>
                {panelData.header}
            </div>
            <div className="floxid-panel-row-content">
                {panelData.content}
            </div>
        </div>
    );
}