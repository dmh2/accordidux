import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PanelSet } from './components/PanelSet';
import reducer from './reducer';
import { List, Map } from 'immutable';
import { addPanel } from './actions';

const store = createStore(reducer);

const testPanels = [
    {isOpen: false,  header: 'Meta Data', content: 'Meta Data panel content goes here.'},
    {isOpen: false, header: 'Policies', content: 'Policies panel content goes here.'},
    {isOpen: true, header: 'User Settings', content: 'User Settings panel content goes here.'},
    {isOpen: false, header: 'Custom Commands', content: 'Custom Commands panel content goes here.'},
    {isOpen: false, header: 'History', content: 'History panel content goes here.'}
];

    let i,length = testPanels.length ;
    for(i=0;i<length;i++){
        store.dispatch(addPanel(testPanels[i]));
    }

render(
    <Provider store={store}>
        <PanelSet />
    </Provider>,
    document.getElementById('app')
);