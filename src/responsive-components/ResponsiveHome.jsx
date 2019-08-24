import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsiveHome extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <styles.Article>
                <h1>ResponsiveHome</h1>
            </styles.Article>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveHome);