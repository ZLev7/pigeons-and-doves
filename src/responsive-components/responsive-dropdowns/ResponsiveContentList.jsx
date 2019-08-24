import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ResponsiveContentList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { pigeonOrDove, breedsOfPigeons, dovesAsPets } = this.props.language.buttons;
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Link to="/Content/Pigeon_Or_Dove"
                onClick={() => {
                    this.props.changePath("/Content/Pigeon_Or_Dove");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}>
                    {pigeonOrDove}
                </Link>
                <Link to="/Content/Breeds_Of_Pigeons"
                onClick={() => {
                    this.props.changePath("/Content/Breeds_Of_Pigeons");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}>
                    {breedsOfPigeons}
                </Link>
                <Link to="/Content/Doves_As_Pets"
                onClick={() => {
                    this.props.changePath("/Content/Doves_As_Pets");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}>
                    {dovesAsPets}
                </Link>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveContentList)