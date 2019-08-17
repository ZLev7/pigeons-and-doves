import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class ThemesList extends React.Component{
    constructor(props){
        super(props)
    }

    useNB = () =>{
        this.props.useNB();
        return this.props.hideSubmenu();
    }

    useSB = () =>{
        this.props.useSB();
        return this.props.hideSubmenu();
    }

    useWN = () =>{
        this.props.useWN();
        return this.props.hideSubmenu();
    }


    render(){
        const { nightBlue, summerBright, winterNoon } = this.props.language.buttons;
        return(
            <styles.OptionsDropdown theme={this.props.theme.dropdown}>
                <styles.SwitchButton
                theme={this.props.theme.dropdown} 
                onClick={this.useNB}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "blue" ?
                    'true' : 'false'}>{nightBlue}</styles.ActiveUnit>
                </styles.SwitchButton>
                <styles.SwitchButton
                theme={this.props.theme.dropdown} 
                onClick={this.useSB}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "orange" ?
                    'true' : 'false'}>{summerBright}</styles.ActiveUnit>
                </styles.SwitchButton>
                <styles.SwitchButton
                theme={this.props.theme.dropdown} 
                onClick={this.useWN}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.theme.body.color === "cornflowerblue" ?
                    'true' : 'false'}>{winterNoon}</styles.ActiveUnit>
                </styles.SwitchButton>
            </styles.OptionsDropdown>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThemesList)