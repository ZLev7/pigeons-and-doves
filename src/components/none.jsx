import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class None extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{this.props.language.none.title}</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(None);