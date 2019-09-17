import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';
import ResponsiveSlider from './ResponsiveSlider';

class ResponsiveBreedsOfPigeons extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { title, text, slider, responsiveNote } = this.props.language.breedsOfPigeons;
        const sliderArr = [

            {
                figcaption: slider.jPigeon,
                source: slider.SourceJPigeon,
                path: `/images/img1.jpg`
            },

            {
                figcaption: slider.cPigeon,
                source: slider.SourceCPigeon,
                path: `/images/img2.jpg`
            },

            {
                figcaption: slider.fPigeon,
                source: slider.SourceFPigeon,
                path: `/images/img3.jpg`
            },

            {
                figcaption: slider.oPigeon,
                source: slider.SourceOPigeon,
                path: `/images/img4.png`
            }

        ]
        return(
            <styles.ResponsiveArticle>
                <h1>{title}</h1>
                <p>
                    {text}
                </p>
                <ResponsiveSlider params={sliderArr} />
                <p>
                    {responsiveNote}
                </p>
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveBreedsOfPigeons);