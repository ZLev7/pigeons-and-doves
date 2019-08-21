import { Link } from 'react-router-dom';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles }  from '../styles/styles';

class ResponsiveHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        }
    }
    render(){
        return(
            <div>
                <div style={{display: 'flex'}}>
                    <div onClick={() => this.setState((prevState, props) => {
                        return({
                            showMenu: true
                        })
                    })}>
                        H
                    </div>
                    <h1>
                        Site about pigeons and doves
                    </h1>
                    <div>
                        S
                    </div>
                </div>
                {this.state.showMenu === true ? <h1>MENU</h1> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveHeader);
