import { Link } from 'react-router-dom';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import ResponsiveNav from './ResponsiveNav';
import { connect } from 'react-redux';
import { styles }  from '../styles/styles';
import ResponsiveSearchBar from './responsive-dropdowns/ResponsiveSearchBar';

class ResponsiveHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            showSearch: false
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
    hideSearch = () => this.state.showSearch === false ? this.setState((prevState, props) => {
        return({
            showSearch: true
        })
    }) : this.setState((prevState, props) => {
        return({
            showSearch: false
        })
    })
    render(){
        return(
            <styles.ResponsiveHeader>
                <div style={{display: 'flex'}}>
                    <styles.ResponsiveMenu onClick={this.hideMenu}>
                        <styles.ResponsiveMenuParts></styles.ResponsiveMenuParts>
                        <styles.ResponsiveMenuParts></styles.ResponsiveMenuParts>
                        <styles.ResponsiveMenuParts></styles.ResponsiveMenuParts>
                    </styles.ResponsiveMenu>
                    <img src="/images/pigeon_PNG3420.png" alt={this.props.language.logoAlt} 
                    style={{width: 45, margin: 'auto'}}/>
                    <div onClick={this.hideSearch} style={{margin: '0px 0px 0px auto'}}>
                        S
                    </div>
                </div>
                {this.state.showMenu === true ? <ResponsiveNav 
                changePath={this.props.changePath} active={this.props.active} 
                hideMenu={this.hideMenu}/> : null}
                {this.state.showSearch === true ? <ResponsiveSearchBar 
                changePath={this.props.changePath} active={this.props.active} 
                hideSearch={this.hideSearch}/> : null}
            </styles.ResponsiveHeader>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveHeader);
