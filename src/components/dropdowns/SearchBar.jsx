import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { Link } from 'react-router-dom';
import { styles } from '../../styles/styles';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
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
            <styles.SearchDropdown  theme={this.props.theme.dropdown}>
                <styles.SearchInput 
                placeholder={this.props.language.search.placeholder} 
                onChange={this.search}
                value={this.state.searchValue}
                theme={this.props.theme.dropdown}/>
                <styles.SearchResults>
                    {this.state.results.length !== 0 ? 
                    this.state.results.map((i) => 
                        <styles.ContentLink to={i.path} id={i.name} key={i.name}
                        theme={this.props.theme.dropdown}
                        onClick={() => {
                            this.props.changePath(i.path)
                            return this.props.hideSubmenu()
                        }}>
                            <styles.ActiveUnit theme={this.props.theme.dropdown}
                            primary={this.props.active === i.path ?
                            'true' : 'false'}>
                                {i.name}
                            </styles.ActiveUnit>
                        </styles.ContentLink>)
                    : <span key={'none'}>{this.props.language.search.error}</span>}
                </styles.SearchResults>
            </styles.SearchDropdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)