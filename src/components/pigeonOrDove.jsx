import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { styles } from '../styles/styles';
import { connect } from 'react-redux';

class PigeonOrDove extends React.Component {
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
            <styles.Article>
                <h1>{title}</h1>
                <p>
                    {text1}
                </p>
                <p>
                    {text2}
                </p>
                <styles.Table theme={this.props.theme.dropdown}>
                    <tr>
                        <styles.TableHead theme={this.props.theme.dropdown}>
                            {photo}
                        </styles.TableHead>
                        <styles.TableHead theme={this.props.theme.dropdown}>
                            {name}
                        </styles.TableHead>
                        <styles.TableHead theme={this.props.theme.dropdown}>
                            {sound}
                        </styles.TableHead>
                    </tr>
                    <tr>
                        <styles.TableImgContainer theme={this.props.theme.dropdown}>
                            <styles.TableFigure>
                                <styles.TableImg src="/images/66031271-720px.jpg" 
                                alt={altPigeon}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    <styles.IntextLinka href="https://www.allaboutbirds.org/guide/Rock_Pigeon/id"
                                     target="_blank">{source} {corUniv}</styles.IntextLinka>
                                </figcaption>    
                            </styles.TableFigure>                    
                        </styles.TableImgContainer>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            {rPigeon}
                        </styles.TableCell>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/golub-vorkuet-pered-golubkoj.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="http://boobooka.com/zvuki/zvuki-ptic/zvuk-golubya/"
                             target="_blank">{source} BooBooka, 2019</styles.IntextLinka>
                        </styles.TableCell>
                    </tr>
                    <tr>
                        <styles.TableImgContainer theme={this.props.theme.dropdown}>
                            <styles.TableFigure>
                                <styles.TableImg src="/images/collared-dove-1280.jpg" 
                                alt={altCDove}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    <styles.IntextLinka href="https://www.saga.co.uk/magazine/home-garden/gardening/wildlife/birds/collared-dove"
                                     target="_blank">{source} {chapman}</styles.IntextLinka>
                                </figcaption>
                            </styles.TableFigure>
                        </styles.TableImgContainer>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            {cDove}
                        </styles.TableCell>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/Dove-sound-eurasian-collared-dove.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="http://www.orangefreesounds.com/dove-sound-eurasian-collared-dove/"
                             target="_blank">{source} Orange Free Sounds, 2015</styles.IntextLinka>
                        </styles.TableCell>
                    </tr>
                    <tr>
                        <styles.TableImgContainer theme={this.props.theme.dropdown}>
                            <styles.TableFigure>
                                <styles.TableImg src="/images/photo_2019-03-16_17-02-41.jpg" 
                                alt={altSDove}
                                theme={this.props.theme.dropdown}/>
                                <figcaption>
                                    {source} {author}
                                </figcaption>
                            </styles.TableFigure>
                        </styles.TableImgContainer>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            {sDove}
                        </styles.TableCell>
                        <styles.TableCell theme={this.props.theme.dropdown}>
                            <audio controls>
                                <source src="/media/XC405376.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <styles.IntextLinka href="https://www.xeno-canto.org/species/Spilopelia-senegalensis"
                             target="_blank">{source} {nbc}</styles.IntextLinka>
                        </styles.TableCell>
                    </tr>
                </styles.Table>
            </styles.Article>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PigeonOrDove);