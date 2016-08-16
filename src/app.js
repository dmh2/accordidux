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
    {isOpen: false,  header: 'Meta Data', content: ['Title','Description','Related']},
    {isOpen: false, header: 'Policies', content: ['Policy A','Restriction Policy']},
    {isOpen: true, header: 'User Settings', content: ['Name','Username','Email','Status']},
    {isOpen: false, header: 'Custom Commands', content: ['Command 1','Command 2','Command 3','Command 4','Command 5']},
    {isOpen: false, header: 'History', content: ['Last Updated','Last Updated By','Created','Created By','Play Count','Use Count']}
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