import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsiveAbout extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { note, me } = this.props.language.about;
        return(
            <styles.ResponsiveArticle>
                <div>
                    <styles.IntextH1 theme={this.props.theme.dropdown}>
                        {note.title}
                    </styles.IntextH1>
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
                </div>
                <div>
                    <styles.IntextH1 theme={this.props.theme.dropdown}>
                        {me.title}
                    </styles.IntextH1>
                    <p>
                        {me.text}.
                    </p>
                </div>
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAbout);