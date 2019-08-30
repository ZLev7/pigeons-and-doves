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
            <styles.ResponsiveNav theme={this.props.theme.header}>
                
                <styles.ResponsiveNavLink to="/Home" onClick={() => {
                    
                this.props.changePath("/Home")

                this.props.hideSubmenu()
                
                return this.props.hideMenu()}}
                
                theme={this.props.theme.nav}
                
                primary={this.props.active === "/Home" || 
                
                this.props.active === "/" ?
                
                'true' : 'false'}>
                    
                    {home.toUpperCase()}
                    
                </styles.ResponsiveNavLink>
                
                <styles.ResponsiveNavButton onClick={() => this.props.currentDropdown === 'content' ?
                 
                this.props.hideSubmenu() : this.props.showContent()}
                
                theme={this.props.theme.nav}
                
                primary={this.props.currentDropdown === 'content'
                
                ? 'true' : 'false'}>
                    
                    {content.toUpperCase()}
                    
                </styles.ResponsiveNavButton>
                
                {this.props.currentDropdown === 'content' ? <ResponsiveContentList
                 
                changePath={this.props.changePath} active={this.props.active}
                
                hideMenu={this.props.hideMenu}/> : null}
                
                <styles.ResponsiveNavButton onClick={() => this.props.currentDropdown === 'themes' ?
                 
                this.props.hideSubmenu() : this.props.showThemes()}
                
                theme={this.props.theme.nav}
                
                primary={this.props.currentDropdown === 'themes'
                
                ? 'true' : 'false'}>
                    
                    {themes.toUpperCase()}
                    
                </styles.ResponsiveNavButton>
                
                {this.props.currentDropdown === 'themes' ? <ResponsiveThemesList
                 
                hideMenu={this.props.hideMenu}/> : null}
                
                <styles.ResponsiveNavButton onClick={() => this.props.currentDropdown === 'languages' ?
                 
                this.props.hideSubmenu() : this.props.showLanguages()}
                
                theme={this.props.theme.nav}
                
                primary={this.props.currentDropdown === 'languages'
                
                ? 'true' : 'false'}>
                    
                    {languages.toUpperCase()}
                    
                </styles.ResponsiveNavButton>
                
                {this.props.currentDropdown === 'languages' ? <ResponsiveLanguagesList
                 
                hideMenu={this.props.hideMenu}/> : null}
                
                <styles.ResponsiveNavLink to="/About" onClick={() => {
                    
                this.props.changePath("/About")

                this.props.hideSubmenu()
                
                return this.props.hideMenu()}}
                
                theme={this.props.theme.nav}
                
                primary={this.props.active === "/About" ?
                
                 'true' : 'false'}>
                     
                    {about.toUpperCase()}
                    
                </styles.ResponsiveNavLink>
                
            </styles.ResponsiveNav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNav);