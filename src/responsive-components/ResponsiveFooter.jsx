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
            <styles.ResponsiveFooterSection theme={this.props.theme.footer}>
                    <styles.FooterPars>
                        {aboutFooter.purpose}
                    </styles.FooterPars>
                    <styles.FooterPars>
                        {aboutFooter.year} 2019, {aboutFooter.logoSource} 
                        <styles.FooterIntextLink 
                        theme={this.props.theme.dropdown}
                        href="http://imgpng.ru/img/animals/pigeon" 
                        target="_blank"> Imgpng, 2019</styles.FooterIntextLink>
                    </styles.FooterPars>
                </styles.ResponsiveFooterSection>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveFooter);


