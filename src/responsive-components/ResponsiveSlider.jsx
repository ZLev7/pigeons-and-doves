import React from 'react';
import { styles } from '../styles/styles';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

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
        const num = this.state.slideNum;
        return(
            <styles.Slider>
                <styles.Back onClick={this.prevSlide}
                theme={this.props.theme.dropdown}>
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
                theme={this.props.theme.dropdown}>
                    &#10095;
                </styles.Next>
            </styles.Slider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSlider);