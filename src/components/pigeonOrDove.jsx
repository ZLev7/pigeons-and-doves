import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../store/store';
import { connect } from 'react-redux';

class PigeonOrDove extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { title, text1, text2, source } = this.props.language.pigeonOrDove;
        const { photo, name, sound, corUniv, chapman, 
            author, rPigeon, cDove, sDove, nbc,
            altPigeon, altCDove, altSDove } = this.props.language.pigeonOrDove.table;
        return(
            <div>
                <h1 style={{color: this.props.theme.body.color}}>{title}</h1>
                <p>
                    {text1}
                </p>
                <p>
                    {text2}
                </p>
                <table style={{border: '1px solid cornflowerblue',
                                    borderCollapse: 'collapse'}}>
                    <tr style={{border: '1px solid cornflowerblue'}}>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {photo}
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {name}
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {sound}
                        </td>
                    </tr>
                    <tr style={{border: '1px solid cornflowerblue'}}>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <figure>
                                <img src="/images/66031271-720px.jpg" 
                                alt={altPigeon} style={{width: 400, height: 300}}/>
                                <figcaption>
                                    <a href="https://www.allaboutbirds.org/guide/Rock_Pigeon/id"
                                     target="_blank">{source} {corUniv}</a>
                                </figcaption>    
                            </figure>                    
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {rPigeon}
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <audio controls>
                                <source src="/media/golub-vorkuet-pered-golubkoj.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <a href="http://boobooka.com/zvuki/zvuki-ptic/zvuk-golubya/"
                             target="_blank">{source} BooBooka, 2019</a>
                        </td>
                    </tr>
                    <tr style={{border: '1px solid cornflowerblue'}}>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <figure>
                                <img src="/images/collared-dove-1280.jpg" 
                                alt={altCDove} style={{width: 400, height: 300}}/>
                                <figcaption>
                                    <a href="https://www.saga.co.uk/magazine/home-garden/gardening/wildlife/birds/collared-dove"
                                     target="_blank">{source} {chapman}</a>
                                </figcaption>
                            </figure>
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {cDove}
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <audio controls>
                                <source src="/media/Dove-sound-eurasian-collared-dove.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <a href="http://www.orangefreesounds.com/dove-sound-eurasian-collared-dove/"
                             target="_blank">{source} Orange Free Sounds, 2015</a>
                        </td>
                    </tr>
                    <tr style={{border: '1px solid cornflowerblue'}}>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <figure>
                                <img src="/images/photo_2019-03-16_17-02-41.jpg" 
                                alt={altSDove} style={{width: 400, height: 300}}/>
                                <figcaption>
                                    {source} {author}
                                </figcaption>
                            </figure>
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            {sDove}
                        </td>
                        <td style={{border: '1px solid cornflowerblue'}}>
                            <audio controls>
                                <source src="/media/XC405376.mp3"
                                 type="audio/mpeg" />
                            </audio><br />
                            <a href="https://www.xeno-canto.org/species/Spilopelia-senegalensis"
                             target="_blank">{source} {nbc}</a>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PigeonOrDove);