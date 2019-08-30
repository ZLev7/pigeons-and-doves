import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { Link } from 'react-router-dom';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class ResponsiveSearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchValue: '',
            searchArr: this.props.language.search.searchArr,
            results: []
        }
    }
    search = (e) => {
        let searchVal = new RegExp(e.target.value, 'ig')
        if(e.target.value === ''){
            return this.setState((prevState, props) => {
                return({
                    searchValue: '',
                    results: []
                })
            });
        }
        this.setState({
            searchValue: e.target.value,
            results: this.state.searchArr.filter((i) => i.name.match(searchVal))
        })
    }
    render(){
        return(
            <styles.ResponsiveSearch theme={this.props.theme.header}>
                <styles.ResponsiveSearchBar>
                    <styles.ResponsiveInput 
                    placeholder={this.props.language.search.placeholder} 
                    onChange={this.search}
                    value={this.state.searchValue}
                    theme={this.props.theme.header}/>
                    <styles.CloseSearchContainer
                    theme={this.props.theme.header}
                    primary='true'>
                        <styles.CloseSearchButton onClick={() => this.props.hideSearch()} 
                        theme={this.props.theme.header}
                        primary='true'/>
                    </styles.CloseSearchContainer>
                </styles.ResponsiveSearchBar>
                <styles.ResponsiveResults>
                    {this.state.results.length !== 0 ? 
                    this.state.results.map((i) => 
                        <Link to={i.path} id={i.name} key={i.name}
                        theme={this.props.theme.dropdown}
                        onClick={() => {
                            this.props.changePath(i.path);
                            this.props.hideSearch();
                            return this.props.hideSubmenu();
                        }}>
                            {i.name}
                        </Link>)
                    : <span key={'none'}>{this.props.language.search.error}</span>}
                </styles.ResponsiveResults>
            </styles.ResponsiveSearch>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSearchBar)