import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PanelSet } from './containers/PanelSet';
import reducer from './reducer';
// import { List, Map } from 'immutable';
import { addPanel } from './actions';

// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

const store = createStore(reducer);

const testPanels = [
    {isOpen: true,  header: 'Meta Data', content: ['Title','Description','Related']},
    {isOpen: false, header: 'Policies', content: ['Policy A','Restriction Policy']},
    {isOpen: false , header: 'User Settings', content: ['Name','Username','Email','Status']},
    {isOpen: false, header: 'Custom Commands', content: ['Command 1','Command 2','Command 3','Command 4','Command 5']},
    {isOpen: false, header: 'History', content: ['Last Updated','Last Updated By','Created','Created By','Play Count','Use Count']}
];

const testPanels2 = [
    {isOpen: false,  header: 'Meta Data 2', content: ['Title 2','Description 2','Related 2']},
    {isOpen: false, header: 'Policies 2', content: ['Policy A 2','Restriction Policy 2']},
    {isOpen: true, header: 'User Settings 2', content: ['Name 2','Username 2','Email 2','Status 2']},
    {isOpen: false, header: 'Custom Commands 2', content: ['Command 1 2','Command 2 2','Command 3 2','Command 4 2','Command 5 2']},
    {isOpen: false, header: 'History 2', content: ['Last Updated 2','Last Updated By 2','Created 2','Created By 2','Play Count 2','Use Count 2']}
];

const isMulti = document.location.href.indexOf('multi=true') >= 0 ;

let multiPanels = [testPanels] ;

if (isMulti){
    multiPanels.push(testPanels2) ;
}

let panelSet, panelSetKey, panelSetId, j, panelData, panelSets = [], groupCount = multiPanels.length ;

for(j=0;j<groupCount;j++){
    panelData = multiPanels[j] ;
    // panelSetId = uid() ;
    panelSetId = 'panelSet' + j ;
    // panelSetKey = 'panelSet' + panelSetId ;
    panelSet = (<PanelSet panelSetId={panelSetId} key={panelSetId}/>)
    let i,length = panelData.length ;
    for(i=0;i<length;i++){
        // store.dispatch(addPanel(panelData[i]));
        store.dispatch(addPanel(panelData[i],panelSetId));
    }
    panelSets.push(panelSet) ;
}

render(
    <Provider store={store}>
        <div className="test-flex-pane">
            {panelSets}
        </div>
    </Provider>,
    document.getElementById('app')
);