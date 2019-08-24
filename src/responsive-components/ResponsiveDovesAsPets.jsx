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
        return(
            <styles.Article>
                <h1>ResponsiveDovesAsPets</h1>
            </styles.Article>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDovesAsPets);