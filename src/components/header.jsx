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
        const { home, content, themes, languages, about, search } = this.props.language.buttons
        return(
            <styles.Header>
                <div>
                    <img src="/images/pigeon_PNG3420.png" alt={this.props.language.logoAlt} style={{
                        width: 100, height: 100}}/>
                    <p>
                        {this.props.language.siteName}
                    </p>
                </div>
                <nav>
                    <Link to="/Home"
                    onClick={() => {
                        return this.props.hideSubmenu()
                    }}>{home}</Link>
                    <button onClick={this.showContent}>{content}</button>
                    <button onClick={this.showThemes}>{themes}</button>
                    <button onClick={this.showLanguages}>{languages}</button>
                    <Link to="/About"
                    onClick={() => {
                        return this.props.hideSubmenu()
                    }}>{about}</Link>
                    <button onClick={this.showSearch}>{search}</button>
                </nav>
                <div>
                    {this.props.currentDropdown === 'content' ? <ContentList /> :
                    this.props.currentDropdown === 'themes' ? <ThemesList /> :
                    this.props.currentDropdown === 'languages' ? <LanguagesList />:
                    this.props.currentDropdown === 'search' ? <SearchBar /> : null}
                </div>
            </styles.Header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
