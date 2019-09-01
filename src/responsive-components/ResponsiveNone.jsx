import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsiveNone extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <styles.ResponsiveArticle>
                <h1>{this.props.language.none.title}</h1>
                <p>
                    {this.props.language.none.text}
                </p>
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNone);