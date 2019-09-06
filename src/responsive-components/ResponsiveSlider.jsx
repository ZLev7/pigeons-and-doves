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
            touchDistance: 0
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
    }
    touchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        console.log(touchEnd)
       this.setState((prevState, props) => ({
           touchDistance: prevState.locationXStart - touchEnd
       }))
       if(this.state.touchDistance > 60){
            return document.getElementById('next').click() 
       } else if(this.state.touchDistance < -60){
            return document.getElementById('back').click()
       }
    }
    render(){
        const params = this.props.params;
        const num = this.state.slideNum;
        return(
            <>
                <styles.Slider 
                    onTouchMove={this.touch}
                    onTouchStart={this.touchStart}
                    onTouchEnd={this.touchEnd}>
                    <styles.Back onClick={this.prevSlide}
                    theme={this.props.theme.dropdown}
                    id='back'>
                        &#10094;
                    </styles.Back>
                        <styles.SliderFigure>
                            <styles.SliderImg src={params[num].path} 
                            theme={this.props.theme.dropdown}/>
                            <styles.SliderFigCapture>
                            {params[num].figcaption}<br />
                            {params[num].source}
                            </styles.SliderFigCapture>
                        </styles.SliderFigure>
                        <styles.Dots>
                            {params.map((i, index) => {
                                if(index === num){
                                    return <styles.Dot id={index.toString()} 
                                        onClick={() => this.setState({slideNum: index})} key={index} 
                                        primary="true"
                                        theme={this.props.theme.dropdown}/>
                                }
                                return <styles.Dot id={index.toString()} 
                                onClick={() => this.setState({slideNum: index})} key={index}
                                primary="false"
                                theme={this.props.theme.dropdown}/>;
                            })}
                        </styles.Dots>
                    <styles.Next onClick={this.nextSlide}
                    theme={this.props.theme.dropdown}
                    id='next'>
                        &#10095;
                    </styles.Next>
                </styles.Slider>
                <p>
                    <h1>
                        {this.state.locationXStart}
                    </h1>
                    <h1>
                        {this.state.touchDistance}
                    </h1>
                </p>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSlider);