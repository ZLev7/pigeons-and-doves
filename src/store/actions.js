import { actionTypes } from './actionTypes';

export const actions = {

    /*Menu functions*/

    showContent(){
        return{
            type: actionTypes.SHOW_CONTENT
        }
    },

    showThemes(){
        return{
            type: actionTypes.SHOW_THEMES
        }
    },

    showLanguages(){
        return{
            type: actionTypes.SHOW_LANGUAGES
        }
    },

    showSearch(){
        return{
            type: actionTypes.SHOW_SEARCH
        }
    },
    
    hideSubmenu(){
        return{
            type: actionTypes.HIDE_SUBMENU
        }
    },

    /*Languages switch functions*/

    useRus(){
        return{
            type: actionTypes.TURNRUS
        }
    },
    useEng(){
        return{
            type: actionTypes.TURNENG
        }
    },

    /*Themes switch functions*/

    useNB(){
        return{
            type: actionTypes.USE_NB
        }
    },

    useSB(){
        return{
            type: actionTypes.USE_SB
        }
    },

    useWN(){
        return{
            type: actionTypes.USE_WN
        }        
    },
}

// printGuestList() {
//     console.log('Guest list for ' + this.name);
// }


// printGuestList() {
//     console.log('Guest list for ' + this.name);
//     this.guestList.forEach((i) => 
//     console.log(i + ' is comming to ' + this.name))
// }