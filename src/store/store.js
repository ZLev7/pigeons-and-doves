import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { actions } from './actions'; 

export const mapStateToProps = (state) => {
    return{
        currentDropdown: state.menu.currentDropdown,
        language: state.language.content,
        theme: state.theme
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{

        /*Menu functions*/

        showContent: () => {
            return dispatch(actions.showContent())
        },

        showThemes: () => {
            return dispatch(actions.showThemes())
        },

        showLanguages: () => {
            return dispatch(actions.showLanguages())
        },

        showSearch: () => {
            return dispatch(actions.showSearch())
        },

        hideSubmenu: () => {
            return dispatch(actions.hideSubmenu())
        },

        /*Language functions*/

        useRus: () => {
            return dispatch(actions.useRus())
        },

        useEng: () => {
            return dispatch(actions.useEng())
        },
        
        /*Themes functions*/

        useNB: () => {
            return dispatch(actions.useNB())
        },

        useSB: () => {
            return dispatch(actions.useSB())
        },

        useWN: () => {
            return dispatch(actions.useWN())
        },
    }
}

export const store = createStore(rootReducer);



