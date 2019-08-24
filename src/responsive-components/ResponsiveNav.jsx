import { Link } from 'react-router-dom';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles }  from '../styles/styles';
import ResponsiveContentList from './responsive-dropdowns/ResponsiveContentList'; 
import ResponsiveThemesList from './responsive-dropdowns/ResponsiveThemesList'; 
import ResponsiveLanguagesList from './responsive-dropdowns/ResponsiveLanguagesList';

class ResponsiveNav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { home, content, themes, languages, about} = this.props.language.buttons;
        console.log(this.props.currentDropdown)
        return(
            <div>
                <styles.NavLink to="/Home" onClick={() => this.props.hideMenu()} style={{margin: 10}}>
                    {home}
                </styles.NavLink>
                <styles.NavButton onClick={() => this.props.currentDropdown === 'content' ? 
                this.props.hideSubmenu() : this.props.showContent()} style={{margin: 10}}>
                    {content}
                </styles.NavButton>
                {this.props.currentDropdown === 'content' ? <ResponsiveContentList 
                changePath={this.props.changePath} active={this.props.active}
                hideMenu={this.props.hideMenu}/> : null}
                <styles.NavButton onClick={() => this.props.currentDropdown === 'themes' ? 
                this.props.hideSubmenu() : this.props.showThemes()} style={{margin: 10}}>
                    {themes}
                </styles.NavButton>
                {this.props.currentDropdown === 'themes' ? <ResponsiveThemesList 
                hideMenu={this.props.hideMenu}/> : null}
                <styles.NavButton onClick={() => this.props.currentDropdown === 'languages' ? 
                this.props.hideSubmenu() : this.props.showLanguages()} style={{margin: 10}}>
                    {languages}
                </styles.NavButton>
                {this.props.currentDropdown === 'languages' ? <ResponsiveLanguagesList 
                hideMenu={this.props.hideMenu}/> : null}
                <styles.NavLink to="/About" onClick={() => this.props.hideMenu()} style={{margin: 10}}>
                    {about}
                </styles.NavLink>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNav);