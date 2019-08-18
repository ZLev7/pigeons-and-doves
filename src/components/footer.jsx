import { Link } from 'react-router-dom';
import React from 'react';
import { styles }  from '../styles/styles';
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
            <styles.Footer theme={this.props.theme.footer}>
                <styles.FooterSection>
                    <styles.FooterTitle>
                        {menuTitle}
                    </styles.FooterTitle>
                    <styles.FooterNav>
                        <styles.FooterLink to="/Home"
                        onClick={() => {
                            this.props.changePath("/Home")
                            return this.props.hideSubmenu()
                        }}>
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === "/Home" || 
                            this.props.active === "/" ?
                            'true' : 'false'}>
                                {home}
                            </styles.FooterActiveUnit>
                        </styles.FooterLink>
                        <styles.FooterLink to="/Content/Pigeon_Or_Dove"
                        onClick={() => {
                            this.props.changePath("/Content/Pigeon_Or_Dove")
                            return this.props.hideSubmenu()
                        }}>
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === "/Content/Pigeon_Or_Dove" ?
                            'true' : 'false'}>
                                {pigeonOrDove}
                            </styles.FooterActiveUnit>
                        </styles.FooterLink>
                        <styles.FooterLink to="/Content/Breeds_Of_Pigeons"
                        onClick={() => {
                            this.props.changePath("/Content/Breeds_Of_Pigeons")
                            return this.props.hideSubmenu()
                        }}>
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === "/Content/Breeds_Of_Pigeons" ?
                            'true' : 'false'}>
                                {breedsOfPigeons}
                            </styles.FooterActiveUnit>
                        </styles.FooterLink>
                        <styles.FooterLink to="/Content/Doves_As_Pets"
                        onClick={() => {
                            this.props.changePath("/Content/Doves_As_Pets")
                            return this.props.hideSubmenu()
                        }}>
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === "/Content/Doves_As_Pets" ?
                            'true' : 'false'}>
                                {dovesAsPets}
                            </styles.FooterActiveUnit>
                        </styles.FooterLink>
                        <styles.FooterLink to="/About"
                        onClick={() => {
                            this.props.changePath("/About")
                            return this.props.hideSubmenu()
                        }}>
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === "/About" ?
                            'true' : 'false'}>
                                {about}
                            </styles.FooterActiveUnit>
                        </styles.FooterLink>
                    </styles.FooterNav>
                </styles.FooterSection>
                <styles.FooterFiller style={{width: 70}}>

                </styles.FooterFiller>
                <styles.FooterSection>
                    <styles.FooterTitle>
                        {usefulLinksTitle}
                    </styles.FooterTitle>
                    <styles.FooterNav>
                        <styles.FooterLinka href="http://www.pigeonrescue.org/"
                        target="_blank">
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}>
                                {usefulLinks.injured}
                            </styles.FooterActiveUnit>
                        </styles.FooterLinka>
                        <styles.FooterLinka href="https://www.thespruce.com/pictures-of-pigeons-and-doves-4121967"
                        target="_blank">
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}>
                                {usefulLinks.species}
                            </styles.FooterActiveUnit>
                        </styles.FooterLinka>
                        <styles.FooterLinka href="https://pixabay.com/images/search/pigeon%20and%20dove/"
                        target="_blank">
                            <styles.FooterActiveUnit theme={this.props.theme.dropdown}>
                                {usefulLinks.pictures}
                            </styles.FooterActiveUnit>
                        </styles.FooterLinka>
                    </styles.FooterNav>
                </styles.FooterSection>
                <styles.FooterFiller style={{width: 70}}>

                </styles.FooterFiller>
                <styles.FooterSection>
                    <h1>
                        {aboutTitle}
                    </h1>
                    <p>
                        {aboutFooter.purpose}
                    </p>
                    <p>
                        {aboutFooter.subject} <abbr title={aboutFooter.subjectFullName}
                        style={{textDecoration: 'none', cursor: 'help'}}>
                        {aboutFooter.subjectName}</abbr>
                    </p>
                    <p>
                        {aboutFooter.year} 2019
                    </p>
                    <p>
                        {aboutFooter.logoSource} <styles.FooterIntextLink 
                        theme={this.props.theme.dropdown}
                        href="http://imgpng.ru/img/animals/pigeon" 
                        target="_blank"> Imgpng, 2019</styles.FooterIntextLink>
                    </p>
                    <p>
                        {aboutFooter.feedbackLink}<br/>
                        <styles.FooterIntextLink href="mailto:d.00008000wiutstudent@gmail.com"
                        theme={this.props.theme.dropdown}>
                            00008000wiutstudent@gmail.com</styles.FooterIntextLink>
                    </p>
                </styles.FooterSection>
            </styles.Footer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);


