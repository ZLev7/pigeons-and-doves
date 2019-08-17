import { Link } from 'react-router-dom';
import ContentList from './dropdowns/ContentList';
import LanguagesList from './dropdowns/LanguagesList';
import SearchBar from './dropdowns/SearchBar';
import ThemesList from './dropdowns/ThemesList';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles }  from '../styles/styles';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    showContent = () =>{
        if(this.props.currentDropdown === "content"){
            return this.props.hideSubmenu()
        }
        return this.props.showContent();
    }
    showThemes = () =>{
        if(this.props.currentDropdown === "themes"){
            return this.props.hideSubmenu()
        }
        return this.props.showThemes();
    }
    showLanguages = () =>{
        if(this.props.currentDropdown === "languages"){
            return this.props.hideSubmenu()
        }
        return this.props.showLanguages();
    }
    showSearch = () =>{
        if(this.props.currentDropdown === "search"){
            return this.props.hideSubmenu()
        }
        return this.props.showSearch();
    }
    render(){
        const { home, content, themes, languages, about, search } = this.props.language.buttons;
        console.log(window.location.pathname)
        return(
            <styles.Header theme={this.props.theme.header}>
                <styles.Logo>
                    <styles.LogoPic src="/images/pigeon_PNG3420.png" alt={this.props.language.logoAlt} />
                    <styles.SiteName theme={this.props.theme.header}>
                        {this.props.language.siteName}
                    </styles.SiteName>
                </styles.Logo>
                <styles.Nav>
                    <styles.NavLink to="/Home"
                    onClick={() => {
                        this.props.changePath("/Home")
                        return this.props.hideSubmenu()
                    }} theme={this.props.theme.nav}
                    primary={this.props.active === "/Home" || 
                    this.props.active === "/" ?
                    'true' : 'false'}>{home}</styles.NavLink>
                    <styles.NavButton onClick={this.showContent} 
                    theme={this.props.theme.nav}
                    primary={this.props.currentDropdown === 'content'
                    ? 'true' : 'false'}>{content}</styles.NavButton>
                    <styles.NavButton onClick={this.showThemes} 
                    theme={this.props.theme.nav}
                    primary={this.props.currentDropdown === 'themes'
                    ? 'true' : 'false'}>{themes}</styles.NavButton>
                    <styles.NavButton onClick={this.showLanguages} 
                    theme={this.props.theme.nav}
                    primary={this.props.currentDropdown === 'languages'
                    ? 'true' : 'false'}>{languages}</styles.NavButton>
                    <styles.NavLink to="/About"
                    onClick={() => {
                        this.props.changePath("/About")
                        return this.props.hideSubmenu()
                    }} theme={this.props.theme.nav}
                    primary={this.props.active === "/About" ?
                    'true' : 'false'}>{about}</styles.NavLink>
                    <styles.NavButton onClick={this.showSearch} 
                    theme={this.props.theme.nav}
                    primary={this.props.currentDropdown === 'search'
                    ? 'true' : 'false'}>{search}</styles.NavButton>
                </styles.Nav>
                <div>
                    {this.props.currentDropdown === 'content' ? <ContentList 
                    changePath={this.props.changePath} active={this.props.active}/> :
                    this.props.currentDropdown === 'themes' ? <ThemesList /> :
                    this.props.currentDropdown === 'languages' ? <LanguagesList />:
                    this.props.currentDropdown === 'search' ? <SearchBar 
                    changePath={this.props.changePath} active={this.props.active}/> : null}
                </div>
            </styles.Header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
