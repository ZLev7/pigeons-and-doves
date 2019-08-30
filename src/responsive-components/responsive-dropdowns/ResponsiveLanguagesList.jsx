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
            <styles.ResponsiveDropdown theme={this.props.theme.nav}>
                <styles.ResponsiveSwitchButton onClick={() => {
                    this.props.hideMenu();
                    this.props.useRus();
                    return this.props.hideSubmenu();}}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.language.buttons.home === "Главная" ?
                    'true' : 'false'}>{'Русский'.toUpperCase()}</styles.ResponsiveActiveUnit>
                </styles.ResponsiveSwitchButton>
                <styles.ResponsiveSwitchButton onClick={() => {
                    this.props.hideMenu();
                    this.props.useEng();
                    return this.props.hideSubmenu();}}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.language.buttons.home === "Home" ?
                    'true' : 'false'}>{'English'.toUpperCase()}</styles.ResponsiveActiveUnit>
                </styles.ResponsiveSwitchButton>
            </styles.ResponsiveDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveLanguagesList)