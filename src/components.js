import React from 'react';
// import { PanelContainer } from './containers' ;

export function Todo(props) {
    const { todo } = props;

    if(todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div className='todo'>
            <input type='text'
                   className='todo__entry'
                   placeholder='Add todo'
                   onKeyDown={onSubmit} />
            <ul className='todo__list'>
                {todos ? todos.map(t => (
                    <li key={t.get('id')}
                        className='todo__item'
                        onClick={toggleClick(t.get('id'))}>
                        <Todo todo={t.toJS()} />
                    </li>
                )) : []}
            </ul>
        </div>
    );
}


export function Panel(props) {
    // const { togglePanel, panelDataList } = props;
    const { clickCallback, panelData } = props;

    // panelData = panelDataList.toJS() ;

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

export function PanelList(props) {
    // const { panels, togglePanel, addPanel } = props;
    // const { panels } = props;
    const { panels, togglePanel} = props;

    // const onSubmit = (event) => {
    //     const input = event.target;
    //     const text = input.value;
    //     const isEnterKey = (event.which == 13);
    //     const isLongEnough = text.length > 0;
    //
    //     if(isEnterKey && isLongEnough) {
    //         input.value = '';
    //         addPanel(text);
    //     }
    // };

    // const handlePanelClick = id => event => togglePanel(id);
    const handlePanelClick = id => togglePanel(id);

    return (
        <div className='floxid-container floxid-column'>
            {panels ? panels.map(panelData => (
                    <Panel panelData={panelData.toJS()} clickCallback={handlePanelClick} key={panelData.get('id')}/>
            )) : [(<span>no panels...</span>)]}
        </div>
        // </div>
    );
}