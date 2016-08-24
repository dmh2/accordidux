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

const _getUrlValue =  function _getUrlValue(testKey) {
    var urlValue = null ;
    var currentURL = document.URL ;
    if(currentURL.indexOf(testKey) >= 0){
        var valueStartIndex = currentURL.indexOf(testKey) ;
        urlValue = currentURL.substr(valueStartIndex + testKey.length + 1) ;
        var valueEndIndex = urlValue.indexOf('&') > 0 ? urlValue.indexOf('&') : urlValue.length ;
        urlValue = urlValue.substring(0,valueEndIndex) ;
    }
    return urlValue ;
}
const fixedHeight = !isNaN(_getUrlValue('fixedHeight')) ? Number(_getUrlValue('fixedHeight')) : 0 ;

let multiPanels = [testPanels] ;

if (isMulti){
    multiPanels.push(testPanels2) ;
}

let panelSet, panelSetKey, panelSetId, j, panelData, panelSets = [], groupCount = multiPanels.length ;
let i, panelItemData, panelItemCount;

for(j=0;j<groupCount;j++){
    panelData = multiPanels[j] ;

    let testFixedHeightStyle = j !== 1 || fixedHeight === 0 ? {} : {height:fixedHeight+'px',maxHeight:fixedHeight+'px'} ;

    // panelSetId = uid() ;
    panelSetId = 'panelSet' + j ;
    // panelSetKey = 'panelSet' + panelSetId ;
    panelSet = (<PanelSet panelSetId={panelSetId} key={panelSetId} panelSetStyle={testFixedHeightStyle}/>) ;
    panelItemCount = panelData.length ;

    for(i=0;i<panelItemCount;i++){
        panelItemData = panelData[i] ;
        // store.dispatch(addPanel(panelData[i]));
        store.dispatch(addPanel(panelItemData,panelSetId));
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