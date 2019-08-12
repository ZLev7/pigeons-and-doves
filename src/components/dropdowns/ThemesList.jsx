import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
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
            <div>
                <button onClick={this.useNB}>{nightBlue}</button>
                <button onClick={this.useSB}>{summerBright}</button>
                <button onClick={this.useWN}>{winterNoon}</button>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThemesList)