import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
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
            <div>
                <button onClick={this.switchToRus}>Русский</button>
                <button onClick={this.switchToEng}>English</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesList)