import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { title, note, me } = this.props.language.about;
        return(
            <div>
                <h1>{this.props.language.about.title}</h1>
                <div style={{display: 'flex'}}>
                    <div>
                        <h2>
                            {note.title}
                        </h2>
                        <p>
                            {note.text}
                        </p>
                        <ul>
                            <li><Link to="/Content/Pigeon_Or_Dove">{note.link1}</Link></li>
                            <li><Link to="/Content/Breeds_Of_Pigeons">{note.link2}</Link></li>
                            <li><Link to="/Content/Doves_As_Pets">{note.link3}</Link></li>
                        </ul>
                    </div>
                    <aside>
                        <h2>
                            {me.title}
                        </h2>
                        <p>
                            {me.text}
                        </p>
                    </aside>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);