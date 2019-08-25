import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { styles } from '../styles/styles';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { note, me } = this.props.language.about;
        return(
            <styles.Article>
                <h1>{this.props.language.about.title}</h1>
                <styles.AboutContainer>
                    <styles.Aside>
                        <h2>
                            {note.title}
                        </h2>
                        <p>
                            {note.text}
                        </p>
                        <ul>
                            <li><styles.IntextLink to="/Content/Pigeon_Or_Dove" 
                            theme={this.props.theme.dropdown}>{note.link1}</styles.IntextLink></li>
                            <li><styles.IntextLink to="/Content/Breeds_Of_Pigeons" 
                            theme={this.props.theme.dropdown}>{note.link2}</styles.IntextLink></li>
                            <li><styles.IntextLink to="/Content/Doves_As_Pets" 
                            theme={this.props.theme.dropdown}>{note.link3}</styles.IntextLink></li>
                        </ul>
                    </styles.Aside>
                    <styles.Aside>
                        <h2>
                            {me.title}
                        </h2>
                        <p>
                            {me.text}
                        </p>
                    </styles.Aside>
                </styles.AboutContainer>
            </styles.Article>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);