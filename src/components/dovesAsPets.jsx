import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class DovesAsPets extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, text1, text2, source } = this.props.language.dovesAsPets;
        return(
            <div>
                <h1 style={{color: this.props.theme.body.color}}>{title}</h1>
                <p>
                    {text1}
                </p>
                <p>
                    {text2}
                </p>
                <iframe src="https://www.youtube.com/embed/qAXoKtXLsBg" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe><br />
                <a href="https://www.youtube.com/watch?v=qAXoKtXLsBg" target="_blank">
                {source.source}{source.name}</a>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DovesAsPets);