import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class ResponsiveLanguagesList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div onClick={() => {
                    this.props.hideMenu();
                    this.props.useRus();
                    return this.props.hideSubmenu();}}>
                    Русский
                </div>
                <div onClick={() => {
                    this.props.hideMenu();
                    this.props.useEng();
                    return this.props.hideSubmenu();}}>
                    English
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveLanguagesList)