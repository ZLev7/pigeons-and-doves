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
            <div>
                <styles.SwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useNB();
                    return this.props.hideSubmenu();
                }}>
                    {nightBlue}
                </styles.SwitchButton>
                <styles.SwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useSB();
                    return this.props.hideSubmenu();
                }}>
                    {summerBright}
                </styles.SwitchButton>
                <styles.SwitchButton
                onClick={() => {
                    this.props.hideMenu();
                    this.props.useWN();
                    return this.props.hideSubmenu();
                }}>
                    {winterNoon}
                </styles.SwitchButton>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveThemesList)