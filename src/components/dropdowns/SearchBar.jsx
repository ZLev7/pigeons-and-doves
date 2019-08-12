import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
import { Link } from 'react-router-dom';
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input 
                placeholder={this.props.language.search.placeholder} 
                onChange={this.search}
                value={this.state.searchValue}
                style={{width: 300}}/>
                {this.state.results.length !== 0 ? 
                this.state.results.map((i) => 
                    <Link to={i.path} id={i.name} key={i.name}
                    onClick={() => {
                        return this.props.hideSubmenu()
                    }}>
                        {i.name}
                    </Link>)
                : <p key={'none'}>{this.props.language.search.error}</p>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)