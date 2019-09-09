import React from 'react';
import { styles } from '../styles/styles';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class ResponsiveSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideNum: 0,
            locationXStart: 0,
            touchDistance: 0,
            dis: 0
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
    touchStart = (e) => {
        const touch = e.touches;
       this.setState((prevState, props) => ({
           locationXStart: touch[0].clientX
       }))
       console.log('locationXStart ' + touch[0].clientX)     
    }
    touch = (e) => {
        const dii = e.touches[0].clientX
        this.setState((prevState, props) => ({
            dis: prevState.locationXStart - dii
        }))
        console.log(this.state.dis)
    }
    touchEnd = async (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        console.log(touchEnd)
       await this.setState((prevState, props) => ({
           touchDistance: prevState.locationXStart - touchEnd
       }))
       if(this.state.touchDistance > 50){
            return document.getElementById('next').click() 
       } else if(this.state.touchDistance < -50){
            return document.getElementById('back').click()
       }
       await this.setState((prevState, props) => ({
            touchDistance: 0
        }))
    }
    render(){
        const params = this.props.params;
        return(
            <>
                <styles.ResponsiveSlider
                    theme={this.props.theme.dropdown} 
                    /*onTouchMove={this.touch}
                    onTouchStart={this.touchStart}
                    onTouchEnd={this.touchEnd}*/>
                    {/* <styles.Back onClick={this.prevSlide}
                    theme={this.props.theme.dropdown}
                    id='back'>
                        &#10094;
                    </styles.Back> */}
                        {params.map((slider) => {
                            return(<styles.ResponsiveSliderFigure>
                                        <styles.ResponsiveSliderImg src={slider.path} 
                                        theme={this.props.theme.dropdown}/>
                                        <styles.ResponsiveSliderFigCapture>
                                        {slider.figcaption}<br />
                                        {slider.source}
                                        </styles.ResponsiveSliderFigCapture>
                                    </styles.ResponsiveSliderFigure>)
                        })}
                    {/* <styles.Next onClick={this.nextSlide}
                    theme={this.props.theme.dropdown}
                    id='next'>
                        &#10095;
                    </styles.Next> */}
                </styles.ResponsiveSlider>
                <p>
                    <h1>
                        {this.state.locationXStart}
                    </h1>
                    <h1>
                        {this.state.touchDistance}
                    </h1>
                    <h1>
                        {this.state.dis}
                    </h1>
                </p>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSlider);