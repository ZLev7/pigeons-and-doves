import React from 'react';
import { styles } from '../styles/styles';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

class ResponsiveSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideNum: 0
        }
    }

    prevSlide = () => {
        const sliderLenght = this.props.params.length - 1;
        if(this.state.slideNum === 0){
            this.setState((prevState, props) => ({
                slideNum: sliderLenght
            }))
        } else {
            this.setState((prevState, props) => ({
                slideNum: prevState.slideNum - 1
            }))
        }
    }

    nextSlide = () => {
        if(this.state.slideNum === this.props.params.length - 1){
            this.setState((prevState, props) => ({
                slideNum: 0
            }))
        } else {
            this.setState((prevState, props) => ({
                slideNum: prevState.slideNum + 1
            }))
        }
    }
    render(){
        const params = this.props.params;
        return(
            <>
                <MediaQuery query="(max-device-width: 320px)">
                    <styles.ResponsiveSlider
                        theme={this.props.theme.dropdown}
                        width='275px'
                        height='340px'
                        marginBottom='20px'>
                        {params.map((slider) => {
                            return(
                                <styles.ResponsiveSliderFigure
                                width='275px'
                                height='340px'
                                marginBottom='20px'>
                                    <styles.ResponsiveSliderImg src={slider.path} 
                                    theme={this.props.theme.dropdown}
                                    width='275px'
                                    height='340px'
                                    marginBottom='20px'/>
                                    <styles.ResponsiveSliderFigCapture>
                                    {slider.figcaption}<br />
                                    {slider.source}
                                    </styles.ResponsiveSliderFigCapture>
                                </styles.ResponsiveSliderFigure>
                                )
                        })}
                    </styles.ResponsiveSlider>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 321px">
                    <MediaQuery query="(max-device-width: 409px)">
                    <   styles.ResponsiveSlider
                            theme={this.props.theme.dropdown}
                            width='310px'
                            height='401px'
                            marginBottom='20px'>
                            {params.map((slider) => {
                                return(
                                    <styles.ResponsiveSliderFigure
                                    width='310px'
                                    height='401px'
                                    marginBottom='20px'>
                                    <   styles.ResponsiveSliderImg src={slider.path} 
                                        theme={this.props.theme.dropdown}
                                        width='310px'
                                        height='401px'
                                        marginBottom='20px'/>
                                        <styles.ResponsiveSliderFigCapture>
                                        {slider.figcaption}<br />
                                        {slider.source}
                                        </styles.ResponsiveSliderFigCapture>
                                    </styles.ResponsiveSliderFigure>
                                    )
                            })}
                        </styles.ResponsiveSlider>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 410px)">
                        <styles.ResponsiveSlider
                            theme={this.props.theme.dropdown}
                            width='355px'
                            height='450px'
                            marginBottom='20px'>
                            {params.map((slider) => {
                                return(
                                    <styles.ResponsiveSliderFigure
                                    width='355px'
                                    height='450px'
                                    marginBottom='20px'>
                                        <styles.ResponsiveSliderImg src={slider.path} 
                                        theme={this.props.theme.dropdown}
                                        width='355px'
                                        height='450px'
                                        marginBottom='20px'/>
                                        <styles.ResponsiveSliderFigCapture>
                                        {slider.figcaption}<br />
                                        {slider.source}
                                        </styles.ResponsiveSliderFigCapture>
                                    </styles.ResponsiveSliderFigure>
                                    )
                            })}
                        </styles.ResponsiveSlider>
                    </MediaQuery>
                </MediaQuery>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSlider);