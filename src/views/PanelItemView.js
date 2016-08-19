import React from 'react';

export function PanelItemView(props) {
    const { content } = props;

    return (
        <div className="tp-string-input-control tp-flex-panel-item">
            <span className="tp-string-input-control-label">{content}</span>
            <textarea name="description" rows="1" data-min-rows="1" className="autoExpand tp-string-input-control-input" spellCheck="false" wrap="on" type="text" dir="auto" placeholder={content + ' description...'}></textarea>
        </div>
    );
}