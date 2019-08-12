import React from 'react';

export class Slider extends React.Component {
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
            <div>
                <div>
                    <button onClick={this.prevSlide}>
                        &#10094;
                    </button>
                        <figure>
                            <img src={params[num].path} 
                            style={{width: 400, height: 300}}/>
                            <figcaption>
                            {params[num].figcaption}<br />
                            {params[num].source}
                            </figcaption>
                        </figure>
                        {params.map((i, index) => {
                            if(index === num){
                                return <button id={index.toString()} 
                                    onClick={() => this.setState({slideNum: index})} key={index} 
                                    style={{background:'cornflowerblue'}}/>

                            }
                            return <button id={index.toString()} 
                            onClick={() => this.setState({slideNum: index})} key={index}/>;
                        })}
                    <button onClick={this.nextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
        )
    }
}