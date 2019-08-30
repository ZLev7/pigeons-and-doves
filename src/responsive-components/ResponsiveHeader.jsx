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
            showSearch: false,
            showMenu: true
        })
    }) : this.setState((prevState, props) => {
        return({
            showMenu: false
        })
    })
    hideSearch = () => this.state.showSearch === false ? this.setState((prevState, props) => {
        return({
            showMenu: false,
            showSearch: true
        })
    }) : this.setState((prevState, props) => {
        return({
            showSearch: false
        })
    })
    render(){
        return(
            <styles.ResponsiveHeader theme={this.props.theme.header}>
                <styles.Head theme={this.props.theme.header}>
                    <styles.ResponsiveMenu onClick={this.hideMenu}
                    theme={this.props.theme.header}
                    primary={this.state.showMenu === true
                    ? 'true' : 'false'}>
                        <styles.ResponsiveMenuSquare>
                            <styles.ResponsiveMenuParts 
                            theme={this.props.theme.header}
                            primary={this.state.showMenu === true
                            ? 'true' : 'false'}>
                            </styles.ResponsiveMenuParts>
                            <styles.ResponsiveMenuParts 
                            theme={this.props.theme.header}
                            primary={this.state.showMenu === true
                            ? 'true' : 'false'}>
                            </styles.ResponsiveMenuParts>
                            <styles.ResponsiveMenuParts 
                            theme={this.props.theme.header}
                            primary={this.state.showMenu === true
                            ? 'true' : 'false'}>
                            </styles.ResponsiveMenuParts>
                        </styles.ResponsiveMenuSquare>
                    </styles.ResponsiveMenu>
                    <img src="/images/pigeon_PNG3420.png" alt={this.props.language.logoAlt} 
                    style={{height: 40}}/>
                    <styles.SearchContainer
                    theme={this.props.theme.header}
                    primary={this.state.showSearch === true
                    ? 'true' : 'false'}>
                        <styles.SearchIcon onClick={this.hideSearch}
                        theme={this.props.theme.header}
                        primary={this.state.showSearch === true
                        ? 'true' : 'false'} />
                    </styles.SearchContainer>
                </styles.Head>
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
