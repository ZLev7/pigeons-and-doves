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
            <styles.ResponsiveDropdown theme={this.props.theme.nav}>
                <styles.ResponsiveContentLink to="/Content/Pigeon_Or_Dove"
                onClick={() => {
                    this.props.changePath("/Content/Pigeon_Or_Dove");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Pigeon_Or_Dove" ?
                    'true' : 'false'}>{pigeonOrDove.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveContentLink>
                <styles.ResponsiveContentLink to="/Content/Breeds_Of_Pigeons"
                onClick={() => {
                    this.props.changePath("/Content/Breeds_Of_Pigeons");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Breeds_Of_Pigeons" ?
                    'true' : 'false'}>{breedsOfPigeons.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveContentLink>
                <styles.ResponsiveContentLink to="/Content/Doves_As_Pets"
                onClick={() => {
                    this.props.changePath("/Content/Doves_As_Pets");
                    this.props.hideMenu();
                    return this.props.hideSubmenu()
                }}
                theme={this.props.theme.dropdown}>
                    <styles.ResponsiveActiveUnit
                    theme={this.props.theme.dropdown}
                    primary={this.props.active === "/Content/Doves_As_Pets" ?
                    'true' : 'false'}>{dovesAsPets.toUpperCase()}
                    </styles.ResponsiveActiveUnit>
                </styles.ResponsiveContentLink>
            </styles.ResponsiveDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveContentList)