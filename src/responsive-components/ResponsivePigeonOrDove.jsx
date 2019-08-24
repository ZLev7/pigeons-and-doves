import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsivePigeonOrDove extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <styles.Article>
                <h1>ResponsivePigeonOrDove</h1>
            </styles.Article>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsivePigeonOrDove);