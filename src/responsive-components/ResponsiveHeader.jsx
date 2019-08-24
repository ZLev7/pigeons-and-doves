import { Link } from 'react-router-dom';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import ResponsiveNav from './ResponsiveNav';
import { connect } from 'react-redux';
import { styles }  from '../styles/styles';

class ResponsiveHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        }
    }
    hideMenu = () => this.state.showMenu === false ? this.setState((prevState, props) => {
        return({
            showMenu: true
        })
    }) : this.setState((prevState, props) => {
        return({
            showMenu: false
        })
    })
    render(){
        return(
            <div>
                <div style={{display: 'flex'}}>
                    <div onClick={this.hideMenu}>
                        H
                    </div>
                    <h1>
                        Site about pigeons and doves
                    </h1>
                    <div>
                        S
                    </div>
                </div>
                {this.state.showMenu === true ? <ResponsiveNav 
                changePath={this.props.changePath} active={this.props.active} 
                hideMenu={this.hideMenu}/> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveHeader);
