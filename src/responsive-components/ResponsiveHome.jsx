import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsiveHome extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { title, content } = this.props.language.home
        return(
            <styles.ResponsiveArticle>
                <h1>{title}</h1>
                <p>{content.text1}</p>
                <p>{content.text2}</p>
                <p>{content.text3}</p>
                <ol>
                    <li style={{marginBottom: 10}}> <styles.IntextLink to="/Content/Pigeon_Or_Dove"
                    onClick={() => {
                        this.props.changePath("/Content/Pigeon_Or_Dove")
                        return this.props.hideSubmenu()
                    }} theme={this.props.theme.dropdown}>{content.point1}</styles.IntextLink></li>
                    <styles.ResponsivePicturesContainer style={{display: 'flex'}}>
                        <styles.ResponsiveHomeFigure>
                            <styles.ResponsiveHomePicture src="images/photo_2019-03-16_13-43-21.jpg" 
                            alt={content.doveAltName}
                            theme={this.props.theme.content}/>
                            <figcaption>
                                <p>
                                    {content.sourceDoveAuthor}
                                </p>
                            </figcaption>
                        </styles.ResponsiveHomeFigure>
                        <styles.ResponsiveHomeFigure>
                            <styles.ResponsiveHomePicture src="images/14_12_Columba_livia_our_pigeon_similar.jpg" 
                            alt={content.pigeonAltName}
                            theme={this.props.theme.content}/>
                            <figcaption>
                                <p>
                                    <styles.IntextLinka href="https://www.diamonddove.info/bird14%20Rock%20Dove.htm" 
                                    target="_blank">{content.sourcePigeonAuthor}</styles.IntextLinka>
                                </p>
                            </figcaption>
                        </styles.ResponsiveHomeFigure>
                    </styles.ResponsivePicturesContainer>
                    <li><styles.IntextLink to="/Content/Breeds_Of_Pigeons"
                    onClick={() => {
                        this.props.changePath("/Content/Breeds_Of_Pigeons")
                        return this.props.hideSubmenu()
                    }} theme={this.props.theme.dropdown}>{content.point2}</styles.IntextLink></li>
                    <li><styles.IntextLink to="/Content/Doves_As_Pets"
                    onClick={() => {
                        this.props.changePath("/Content/Doves_As_Pets")
                        return this.props.hideSubmenu()
                    }} theme={this.props.theme.dropdown}>{content.point3}</styles.IntextLink></li>
                </ol><br />
                <br />
                <br />
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveHome);