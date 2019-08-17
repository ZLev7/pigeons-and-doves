import React from 'react';
import { Link } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

export class ContentList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { pigeonOrDove, breedsOfPigeons, dovesAsPets } = this.props.language.buttons;
        return(
            <styles.OptionsDropdown theme={this.props.theme.dropdown}>
                <styles.ContentLink to="/Content/Pigeon_Or_Dove"
                 theme={this.props.theme.dropdown}
                onClick={() => {
                    this.props.changePath("/Content/Pigeon_Or_Dove")
                    return this.props.hideSubmenu()
                }}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Pigeon_Or_Dove" ?
                    'true' : 'false'}>{pigeonOrDove}
                    </styles.ActiveUnit>
                </styles.ContentLink>
                <styles.ContentLink to="/Content/Breeds_Of_Pigeons"
                 theme={this.props.theme.dropdown}
                onClick={() => {
                    this.props.changePath("/Content/Breeds_Of_Pigeons")
                    return this.props.hideSubmenu()
                }}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Breeds_Of_Pigeons" ?
                    'true' : 'false'}>{breedsOfPigeons}
                    </styles.ActiveUnit>
                </styles.ContentLink>
                <styles.ContentLink to="/Content/Doves_As_Pets"
                 theme={this.props.theme.dropdown}
                onClick={() => {
                    this.props.changePath("/Content/Doves_As_Pets")
                    return this.props.hideSubmenu()
                }}>
                    <styles.ActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Doves_As_Pets" ?
                    'true' : 'false'}>{dovesAsPets}
                    </styles.ActiveUnit>
                </styles.ContentLink>
            </styles.OptionsDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)