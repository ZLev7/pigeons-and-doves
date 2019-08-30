import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class ResponsiveThemesList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { nightBlue, summerBright, winterNoon } = this.props.language.buttons;
        return(
            <styles.ResponsiveDropdown theme={this.props.theme.nav}>
                <styles.ResponsiveSwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useNB();
                    return this.props.hideSubmenu();
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "blue" ?
                    'true' : 'false'}>
                        {nightBlue.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveSwitchButton>
                <styles.ResponsiveSwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useSB();
                    return this.props.hideSubmenu();
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "orange" ?
                    'true' : 'false'}>
                        {summerBright.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveSwitchButton>
                <styles.ResponsiveSwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useWN();
                    return this.props.hideSubmenu();
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "cornflowerblue" ?
                    'true' : 'false'}>
                        {winterNoon.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveSwitchButton>
            </styles.ResponsiveDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveThemesList)