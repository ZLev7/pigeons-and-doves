import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class LanguagesList extends React.Component{
    constructor(props){
        super(props)
    }
    switchToRus = () => {
        return this.props.useRus();
    }    
    switchToEng = () => {
        return this.props.useEng();
    }
    render(){
        return(
            <styles.OptionsDropdown theme={this.props.theme.dropdown}>
                <styles.SwitchButton onClick={this.switchToRus}
                theme={this.props.theme.dropdown}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.language.buttons.home === "Главная" ?
                    'true' : 'false'}>Русский</styles.ActiveUnit>
                </styles.SwitchButton>
                <styles.SwitchButton onClick={this.switchToEng}
                theme={this.props.theme.dropdown}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.language.buttons.home === "Home" ?
                    'true' : 'false'}>English</styles.ActiveUnit>
                </styles.SwitchButton>
            </styles.OptionsDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesList)