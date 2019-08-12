import { Link } from 'react-router-dom';
import ContentList from './dropdowns/ContentList';
import LanguagesList from './dropdowns/LanguagesList';
import SearchBar from './dropdowns/SearchBar';
import ThemesList from './dropdowns/ThemesList';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { home, pigeonOrDove, breedsOfPigeons, dovesAsPets, about } = 
        this.props.language.buttons;
        const { menuTitle, usefulLinksTitle, usefulLinks, aboutTitle, aboutFooter } = this.props.language.footer;
        return(
            <footer style={{display: 'flex'}}>
                <div>
                    <h1>
                        {menuTitle}
                    </h1>
                    <ul>
                        <li>
                            <Link to="/Home">{home}</Link>
                        </li>
                        <li>
                            <Link to="/Content/Pigeon_Or_Dove">
                            {pigeonOrDove}</Link>
                        </li>
                        <li>
                            <Link to="/Content/Breeds_Of_Pigeons">
                            {breedsOfPigeons}</Link>
                        </li>
                        <li>
                            <Link to="/Content/Doves_As_Pets">
                            {dovesAsPets}</Link>
                        </li>
                        <li>
                            <Link to="/About">{about}</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>
                        {usefulLinksTitle}
                    </h1>
                    <ul>
                        <li><a href="http://www.pigeonrescue.org/" target="_blank">
                            {usefulLinks.injured}</a></li>
                        <li><a href="https://www.thespruce.com/pictures-of-pigeons-and-doves-4121967" target="_blank">
                            {usefulLinks.species}</a></li>
                        <li><a href="https://pixabay.com/images/search/pigeon%20and%20dove/" target="_blank">
                            {usefulLinks.pictures}</a></li>
                    </ul>
                </div>
                <div>
                    <h1>
                        {aboutTitle}
                    </h1>
                    <p>
                        {aboutFooter.purpose}
                    </p>
                    <p>
                        {aboutFooter.subject} <abbr title={aboutFooter.subjectFullName}
                        style={{textDecoration: 'none'}}>
                        {aboutFooter.subjectName}</abbr>
                    </p>
                    <p>
                        {aboutFooter.year} 2019
                    </p>
                    <p>
                        {aboutFooter.logoSource} <a 
                        href="http://imgpng.ru/img/animals/pigeon" 
                        target="_blank"> Imgpng, 2019</a>
                    </p>
                    <p>
                        {aboutFooter.feedbackLink}<br/>
                        <a href="mailto:d.00008000wiutstudent@gmail.com">
                            00008000wiutstudent@gmail.com</a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
