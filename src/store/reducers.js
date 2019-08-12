import { actionTypes } from './actionTypes';
import { actions }  from './actions';
import produce from 'immer';
import { state } from './store';
import { combineReducers } from 'redux';
import { rusVers, engVers } from '../languages/languages';
import { nightBlue, summerBright, winterNoon } from '../themes/themes';
 
const menuReducer = (state = {
    currentDropdown: ''
}, action) => produce(state, draft => {

    switch(action.type){
        case actionTypes.SHOW_SEARCH:
            draft.currentDropdown = 'search';
            break;
        case actionTypes.SHOW_CONTENT:
            draft.currentDropdown = 'content';
            break;
        case actionTypes.SHOW_LANGUAGES:
            draft.currentDropdown = 'languages';
            break;
        case actionTypes.SHOW_THEMES:
            draft.currentDropdown = 'themes';
            break;
        case actionTypes.HIDE_SUBMENU:
            draft.currentDropdown = ""
            break;
        default: 
            draft.currentDropdown = '';
            break;
    }

})

const languageReducer = (state = {
    content: engVers
}, action) => produce(state, draft => {

    switch(action.type){
        case actionTypes.TURNENG:
            draft.content = engVers;
            break;
        case actionTypes.TURNRUS:
            draft.content = rusVers;
            break;
    }

})

const themeReducer = (state = nightBlue, action) => produce(state, draft => {

    switch(action.type){
        case actionTypes.USE_NB:
            return draft = nightBlue;
            break;
        case actionTypes.USE_SB:
            return draft = summerBright;
            break;
        case actionTypes.USE_WN:
            return draft = winterNoon;
            break;
    }

})

export const rootReducer = combineReducers({
    menu: menuReducer,
    language: languageReducer,
    theme: themeReducer
})