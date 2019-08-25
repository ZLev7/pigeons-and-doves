import { Link } from 'react-router-dom';
import React from 'react';
import { styles }  from '../styles/styles';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class ResponsiveFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { aboutTitle, 
            aboutFooter } = this.props.language.footer;
        return(
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
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveFooter);


