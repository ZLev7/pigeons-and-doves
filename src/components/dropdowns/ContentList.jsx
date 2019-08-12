import React from 'react';
import { Link } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { connect } from 'react-redux';

export class ContentList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { pigeonOrDove, breedsOfPigeons, dovesAsPets } = this.props.language.buttons;
        return(
            <div>
                <Link to="/Content/Pigeon_Or_Dove"
                onClick={() => {
                    return this.props.hideSubmenu()
                }}>{pigeonOrDove}</Link>
                <Link to="/Content/Breeds_Of_Pigeons"
                onClick={() => {
                    return this.props.hideSubmenu()
                }}>{breedsOfPigeons}</Link>
                <Link to="/Content/Doves_As_Pets"
                onClick={() => {
                    return this.props.hideSubmenu()
                }}>{dovesAsPets}</Link>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)