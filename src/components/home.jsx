import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { title, content } = this.props.language.home
        return(
            <div>
                <h1>{title}</h1>
                <p>{content.text1}</p>
                <p>{content.text2}</p>
                <p>{content.text3}</p>
                <ul>
                    <li> <Link to="/Content/Pigeon_Or_Dove">{content.point1}</Link></li>
                    <figure>
                        <img src="images/photo_2019-03-16_13-43-21.jpg" 
                        alt={content.doveAltName} />
                        <figcaption>
                            <p>
                                {content.sourceDoveAuthor}
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="images/14_12_Columba_livia_our_pigeon_similar.jpg" 
                        alt={content.pigeonAltName} />
                        <figcaption>
                            <p>
                                <a href="https://www.diamonddove.info/bird14%20Rock%20Dove.htm" 
                                target="_blank">{content.sourcePigeonAuthor}</a>
                            </p>
                        </figcaption>
                    </figure>
                    <li><Link to="/Content/Breeds_Of_Pigeons">{content.point2}</Link></li>
                    <li><Link to="/Content/Doves_As_Pets">{content.point3}</Link></li>
                </ul>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);