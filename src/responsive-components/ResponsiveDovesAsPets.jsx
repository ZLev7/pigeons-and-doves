import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsiveDovesAsPets extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { title, text1, text2, source } = this.props.language.dovesAsPets;
        return(
            <styles.ResponsiveArticle>
                <h1>{title}</h1>
                <p>
                    {text1}
                </p>
                <p>
                    {text2}
                </p>
                    <styles.ResponsiveYouTubeVideoContainer>
                        <styles.ResponsiveYouTubeVideo src="https://www.youtube.com/embed/qAXoKtXLsBg" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        theme={this.props.theme.dropdown}></styles.ResponsiveYouTubeVideo>
                    </styles.ResponsiveYouTubeVideoContainer>
                <br />
                <styles.IntextLinka href="https://www.youtube.com/watch?v=qAXoKtXLsBg" target="_blank">
                {source.source}{source.name}</styles.IntextLinka>
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDovesAsPets);