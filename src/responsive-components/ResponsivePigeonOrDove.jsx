import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

class ResponsivePigeonOrDove extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){
        const { title, text1, text2, source } = this.props.language.pigeonOrDove;
        const { photo, name, sound, corUniv, chapman, 
            author, rPigeon, cDove, sDove, nbc,
            altPigeon, altCDove, altSDove } = this.props.language.pigeonOrDove.table;
        return(
            <styles.ResponsiveArticle>
                <h1>{title}</h1>
                <p>
                    {text1}
                </p>
                <p>
                    {text2}
                </p>
                <styles.ResponsiveTable theme={this.props.theme.dropdown}>
                    <tbody>
                        <styles.ResponsiveTableImgContainer theme={this.props.theme.dropdown}>
                            <styles.ResponsiveTableFigure>
                                <styles.ResponsiveTableImg src="/images/66031271-720px.jpg" 
                                alt={altPigeon}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    {rPigeon}. <styles.IntextLinka href="https://www.allaboutbirds.org/guide/Rock_Pigeon/id"
                                    target="_blank">{source} {corUniv}</styles.IntextLinka>
                                </figcaption>    
                            </styles.ResponsiveTableFigure>                    
                        </styles.ResponsiveTableImgContainer>
                        <styles.ResponsiveTableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/golub-vorkuet-pered-golubkoj.mp3"
                                type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="http://boobooka.com/zvuki/zvuki-ptic/zvuk-golubya/"
                            target="_blank">{source} BooBooka, 2019</styles.IntextLinka>
                        </styles.ResponsiveTableCell>
                        <styles.ResponsiveTableImgContainer theme={this.props.theme.dropdown}>
                            <styles.ResponsiveTableFigure>
                                <styles.ResponsiveTableImg src="/images/collared-dove-1280.jpg" 
                                alt={altCDove}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    {cDove}. <styles.IntextLinka href="https://www.saga.co.uk/magazine/home-garden/gardening/wildlife/birds/collared-dove"
                                    target="_blank">{source} {chapman}</styles.IntextLinka>
                                </figcaption>
                            </styles.ResponsiveTableFigure>
                        </styles.ResponsiveTableImgContainer>
                        <styles.ResponsiveTableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/Dove-sound-eurasian-collared-dove.mp3"
                                type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="http://www.orangefreesounds.com/dove-sound-eurasian-collared-dove/"
                            target="_blank">{source} Orange Free Sounds, 2015</styles.IntextLinka>
                        </styles.ResponsiveTableCell>
                        <styles.ResponsiveTableImgContainer theme={this.props.theme.dropdown}>
                            <styles.ResponsiveTableFigure>
                                <styles.ResponsiveTableImg src="/images/photo_2019-03-16_17-02-41.jpg" 
                                alt={altSDove}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    {sDove}. {source} {author}
                                </figcaption>
                            </styles.ResponsiveTableFigure>
                        </styles.ResponsiveTableImgContainer>
                        <styles.ResponsiveTableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/XC405376.mp3"
                                type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="https://www.xeno-canto.org/species/Spilopelia-senegalensis"
                            target="_blank">{source} {nbc}</styles.IntextLinka>
                        </styles.ResponsiveTableCell>
                    </tbody>
                </styles.ResponsiveTable>
            </styles.ResponsiveArticle>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsivePigeonOrDove);