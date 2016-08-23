import { List, Map } from 'immutable';
import R from 'ramda';

const initMap = Map({});
const initList = List([]);

// export default function(panels=initList, action) {
// export default function(panelSets=initMap, action) {
export default function(panelSets = {}, action) {
    const panelSetId = action && action.payload && typeof action.payload.panelSetId !== 'undefined' ? action.payload.panelSetId : null ;
    switch(action.type) {
        case 'ADD_PANEL':
            if(panelSetId !== null){
                if(!panelSets[panelSetId]) {
                    panelSets[panelSetId] = {} ;
                    if(!panelSets[panelSetId].panels){
                        panelSets[panelSetId].panels = [] ;
                    }
                    if(!panelSets[panelSetId].openCount){
                        panelSets[panelSetId].openCount = 0 ;
                    }
                    // panelSets[panelSetId].panels = [] ;
                }
                // if(!panelSets.get(panelSetId)){
                //     // panelSets[panelSetId].set('panels',initList) ;
                //     panelSets = panelSets.set(panelSetId, Map({})) ;
                //     panelSets = panelSets.setIn([panelSetId,'panels'],List([])) ;
                // }
                // if(!panelSets[panelSetId].panels){
                //     panelSets[panelSetId].panels = initList ;
                // }
            }


            // return panels.push(Map(action.payload));
            // let panelSetId = action.payload.panelSetId ;
            // let panelSet = panelSets[panelSetId] ? panelSets[panelSetId] :
            // if(!panelSets[panelSetId].panels){
            //     panelSets[panelSetId].panels = initList ;
            // }
            if(panelSetId !== null){
                panelSets[panelSetId].panels.push(action.payload);

                // Conditionally increment the openCount.
                if(action.payload && action.payload.isOpen){
                    panelSets[panelSetId].openCount ++ ;
                }

                return panelSets ;
                // return panelSets[panelSetId].panels.push(Map(action.payload));
                // let panels = panelSets.getIn([panelSetId,'panels']) ;
                // if(panels){
                //     return panelSets.getIn([panelSetId,'panels']).push(Map(action.payload));
                // }
                // else return panelSets ;
            }
            else return panelSets ;
        case 'TOGGLE_PANEL':
            // return panels.map(panel => {
            // let panelSetId = action.payload.panelSetId ;
            // let panelSetId = action && action.payload && typeof action.payload.panelSetId !== 'undefined' ? action.payload.panelSetId : null ;

            if(panelSetId) {
                // return panelSets[panelSetId].panels.map(panel => {
                    // if(panel.get('id') === action.payload) {
                    //     return panel.update('isOpen', isOpen => !isOpen);
                    // } else {
                    //     return panel;
                    // }
                // panelSets[panelSetId].panels = panelSets[panelSetId].panels.map(panel => {
                let openCount = panelSets[panelSetId] && panelSets[panelSetId].openCount ? panelSets[panelSetId].openCount : -1 ;

                panelSets[panelSetId].panels.map(panel => {
                    // if(panel.id === action.payload) {
                    if(panel.id === action.payload.id) {
                        // Update the open count.
                        if(panel.isOpen){
                            // Don't toggle the last open panel,
                            // i.e. don't allow 0 open panels.
                            // TODO - set open limit by configuration.
                            if(panelSets[panelSetId].openCount <= 1){
                                return panel ;
                            }
                            panelSets[panelSetId].openCount-- ;
                        }
                        else{
                            panelSets[panelSetId].openCount++ ;
                        }
                        // Toggle the isOpen value ;
                        panel.isOpen = !panel.isOpen ;
                    }
                    return panel ;
                });
            }
            return R.clone(panelSets) ;
        default:
            // return panels;
            return panelSets;
    }
}