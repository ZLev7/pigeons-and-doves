import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Search } from 'styled-icons/boxicons-regular/Search';
import { Close } from 'styled-icons/material/Close';

export const styles = {

    Body: styled.div`
        background-image: ${(props) => props.theme.backgroundImage};
        background-attachment: fixed;
    `,

    Content: styled.div`
        width: 940px !important;
        margin: 0 auto;
        font-family: Arial;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        border: 2px solid ${(props) => props.theme.border};
        box-shadow: 0 0 2em ${(props) => props.theme.border};
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    `,

    Main: styled.main`
        flex-grow: 1;
    `,

    Header: styled.header`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Times New Roman;
        background: ${(props) => props.theme.background};
    `,

    Logo: styled.div`
        display: flex,
        width: 100%;
    `,

    LogoPic: styled.img`
        width: 100px;
        height: 120px;
        margin: 5px 20px 0px 40px;
    `,

    SiteName: styled.div`
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 46px;
        margin-right: 25px;
        color: ${(props) => props.theme.color};
        font-family: Times New Roman;
    `,

    Nav: styled.div`
        display: flex;
    `,

    NavLink: styled(Link)`
        text-decoration: none;
        background: ${(props) => props.primary === 'true' ? props.theme.activeBg : 
        'transparent'};
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
        color: ${(props) => props.primary === 'true' ? props.theme.activeColor : 
        props.theme.color};
        width: 16.75%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        &:first-child{
            border-top-left-radius: 0;
        };
        &:hover {
            transition: 0.2s ease-out;
            background: ${(props) => props.theme.activeBg};
            color: ${(props) => props.theme.activeColor};
        };
    `,

    NavButton: styled.div`
        border: none;
        background: ${(props) => props.primary === 'true' ? props.theme.activeBg : 
        'transparent'};
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
        color: ${(props) => props.primary === 'true' ? props.theme.activeColor : 
        props.theme.color};
        width: 16.75%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        &:last-child{
            border-top-right-radius: 0;
        };
        &:hover {
            transition: 0.2s ease-out;
            background: ${(props) => props.theme.activeBg};
            color: ${(props) => props.theme.activeColor};
        };
    `,

    OptionsDropdown: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 20px;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        height: 40px;
        border-bottom: 2px solid ${(props) => props.theme.color};
        padding-bottom: 3px;
    `,

    SearchDropdown: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 20px;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        border-bottom: 2px solid ${(props) => props.theme.color};
        padding-bottom: 3px;
    `,

    SearchInput: styled.input`
        margin-top: 15px;
        width: 250px;
        height: 30px;
        text-align: center;
        font-size: 20px;
        border-radius: 5px;
        border: 2px solid ${(props) => props.theme.color};
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        &::placeholder{
            font-size: 20px;
            color: ${(props) => props.theme.color};
        }
        outline: none;
    `,

    SearchResults: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0 6px 0;
    `,

    ContentLink: styled(Link)`
        margin: auto;
        padding-top: 2px;
        text-align: center;
        color: ${(props) => props.theme.color};
        text-decoration: none;
    `,

    ActiveUnit: styled.div`
        margin: auto;
        width: 100%;
        padding: 5px 4px 4px 4px;
        background: ${(props) => props.primary === 'true' ? 
        props.theme.color : props.theme.background};
        color: ${(props) => props.primary === 'true' ? 
        props.theme.background : props.theme.color};
        border-radius: 5px;
        &:hover{
            transition: 0.1s ease-out;
            background: ${(props) => props.theme.color};
            color: ${(props) => props.theme.background};
        }
    `,

    SwitchButton: styled.div`
        margin: auto;
        padding-top: 2px;
        text-align: center;
        color: ${(props) => props.theme.color};
        text-decoration: none;
        cursor: pointer;
    `,

    Footer: styled.footer`
        font-family: Times New Roman;
        width: 100%;
        display: flex;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    `,

    FooterSection: styled.section`
        padding-left: 15px;
        font-size: 16px;
        &:last-child{
            margin-right: 20px;
        }
    `,

    FooterFiller: styled.div`
        flex-grow: 1;
    `,

    FooterNav: styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `,

    FooterLink: styled(Link)`
        white-space: nowrap;
        text-decoration: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
    `,

    FooterLinka: styled.a`
        white-space: nowrap;
        text-decoration: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
    `,

    FooterActiveUnit: styled.div`
        width: auto;
        padding: 5px 4px 4px 4px;
        background: ${(props) => props.primary === 'true' ? 
        props.theme.background : props.theme.nonActiveColor};
        color: ${(props) => props.primary === 'true' ? 
        props.theme.color : props.theme.nonActiveBackground};
        border-radius: 5px;
        &:hover{
            transition: 0.1s ease-out;
            background: ${(props) => props.theme.background};
            color: ${(props) => props.theme.color};
        }
    `,

    FooterTitle: styled.h1`
        margin-left: 4px;
        margin-bottom: 14px;
    `,

    FooterIntextLink: styled.a`
        color: ${(props) => props.theme.nonActiveBackground};
        text-decoration: none;
    `,

    Article: styled.div`
        margin: 30px 40px 30px 40px;
        font-size: 15pt;
    `,

    IntextLink: styled(Link)`
        color: inherit;
        text-decoration: none;
    `,

    IntextLinka: styled.a`
        color: inherit;
        text-decoration: none;
    `,

    HomePicture: styled.img`
        width: 370px;
        height: 400px;
        transition: 0.4s ease-out;
        border: 2px solid ${(props) => props.theme.border};
        border-radius: 5px;
        &:hover{
            cursor: pointer;
            transition: 0.4s ease-out;
            transform: scale(1.44);
        }
    `,

    HomeFigure: styled.figure`
        margin-left: 1px;
        &:first-child{
            margin-right: 29px;
        }
    `,

    Table: styled.table`
        border: 3px solid ${(props) => props.theme.color};
        border-collapse: collapse;
        width: 100%;
    `,

    TableCell: styled.td`
        border: 3px solid ${(props) => props.theme.color};
        height: 240px;
        text-align: center;
    `,

    TableImgContainer: styled.td`
        border: 3px solid ${(props) => props.theme.color};
        width: 300px;
        padding: 0;
        padding-bottom: 3px;
        text-align: center;
    `,

    TableHead: styled.td`
        border: 3px solid ${(props) => props.theme.color};
        height: 40px;
        text-align: center;
    `,

    TableImg: styled.img`
        height: 80%;
        width: 100%;
        border-bottom: 2px solid ${(props) => props.theme.color};
    `,

    TableFigure: styled.figure`
        margin: 0;
        height: 100%;
        width: 100%;
    `,

    Slider: styled.div`
        width: 100%;
        display: flex;
        position: relative;
    `,

    SliderImg: styled.img`
        width: 100%;
        height: 600px;
        border: 2px solid ${(props) => props.theme.color};
        border-radius: 10px;
    `,

    Next: styled.div`
        position: absolute;
        right: -2px;
        top: 269px;
        padding-bottom: 3px;
        cursor: pointer;
        height: 60px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: 0.4s ease-out;
        &:hover{
            cursor: pointer;
            transition: 0.4s ease-out;
            background: ${(props) => props.theme.color};
            color: ${(props) => props.theme.background};
        }
    `,

    Back: styled.div`
        position: absolute;
        top: 269px;
        padding-bottom: 3px;
        cursor: pointer;
        height: 60px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        transition: 0.4s ease-out;
        &:hover{
            cursor: pointer;
            transition: 0.4s ease-out;
            background: ${(props) => props.theme.color};
            color: ${(props) => props.theme.background};
        }
        z-index: 1;
    `,

    Dots: styled.div`
        position: absolute;
        width: 24%;
        bottom: 10%;
        left: 38%;
        display: flex;
    `,

    Dot: styled.div`
        background: ${(props) => props.primary === 'true' ? 
        props.theme.nonActiveColor : '#777777'};
        border-radius: 15px;
        height: 20px;
        width: 25%;
        margin: 5px;
        transition: 0.4s ease-out;
        &:hover{
            cursor: pointer;
            transition: 0.4s ease-out;
            background: ${(props) => props.theme.nonActiveColor};
        }
    `,

    SliderFigure: styled.figure`
        margin: 0;
        height: 100%;
        width: 100%;
        position: relative;
    `,

    SliderFigCapture: styled.figcaption`
        position: absolute;
        bottom: 1.5%;
        left: 1%;
        color: floralwhite;
    `,

    YouTubeVideo: styled.iframe`
        width: 100%;
        height: 645px;
        border: 2px solid ${(props) => props.theme.color};
        border-radius: 10px;
    `,

    AboutContainer: styled.div`
        display: flex;
        justify-content: space-between;
    `,

    Aside: styled.aside`
        width: 49%;
    `,

    ResponsiveApp: styled.div`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    `,
    
    ResponsiveAppContainer: styled.div`
        flex-grow: 1;
        color: ${(props) => props.theme.color};
        background: ${(props) => props.theme.background};
    `,

    ResponsiveHeader: styled.header`
        position: relative;
    `,

    Head: styled.div`
        position: fixed;
        width: 100%;
        top: 0;
        background: ${(props) => props.theme.background};
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
    `,
    ResponsiveMenu: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: ${(props) => props.primary === 'true' ? props.theme.color :
        props.theme.background};
        border-radius: 5px;
        margin-left: 5px;
    `,

    ResponsiveMenuSquare: styled.div`
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `,

    ResponsiveMenuParts: styled.div`
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: ${(props) => props.primary === 'true' ? props.theme.background :
        props.theme.color};
        margin 0 auto;
    `,

    SearchContainer: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        margin-right: 5px;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.primary === 'true' ? props.theme.color :
        props.theme.background};
    `,

    SearchIcon: styled(Search)`
        color: ${(props) => props.primary === 'true' ? props.theme.background :
        props.theme.color};
        width: 40px;
    `,

    ResponsiveNav: styled.nav`
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        top: 50px;
        z-index: 999;
        background: ${(props) => props.theme.background};
    `,

    ResponsiveNavLink: styled(Link)`
        text-decoration: none;
        background: ${(props) => props.primary === 'true' ? props.theme.activeBg : 
        'transparent'};
        font-size: 25px;
        font-weight: 500;
        font-family: Times New Roman;
        color: ${(props) => props.primary === 'true' ? props.theme.activeColor : 
        props.theme.color};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    `,

    ResponsiveNavButton: styled.div`
        background: ${(props) => props.primary === 'true' ? props.theme.activeBg : 
        'transparent'};
        font-size: 25px;
        font-weight: 500;
        font-family: Times New Roman;
        color: ${(props) => props.primary === 'true' ? props.theme.activeColor : 
        props.theme.color};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    `,

    ResponsiveDropdown: styled.div`
        width: 100%;
        background: ${(props) => props.theme.activeBg};
        color: ${(props) => props.theme.activeColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: -5px;
        padding: 0 0 10px 0;
    `,

    ResponsiveActiveUnit: styled.div`
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 25px;
        padding: 5px 8px 4px 8px;
        background: ${(props) => props.primary === 'true' ? 
        props.theme.color : props.theme.background};
        color: ${(props) => props.primary === 'true' ? 
        props.theme.background : props.theme.color};
        border-radius: 5px;
    `,

    ResponsiveContentLink: styled(Link)`
        margin: auto;
        font-family: Times New Roman;
        color: ${(props) => props.theme.color};
        text-decoration: none;
    `, 

    ResponsiveSwitchButton: styled.div`
        margin: auto;
        font-family: Times New Roman;
        color: ${(props) => props.theme.color};
        text-decoration: none;
    `, 

    ResponsiveSearch: styled.div`
        position: fixed;
        width: 100%;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        background: ${(props) => props.theme.background};
    `,

    ResponsiveSearchBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    `,

    ResponsiveInput: styled.input`
        flex-grow: 1;
        margin: 0 5px;
        height: 38px;
        border: none;
        padding-left: 9px;
        padding-right: 9px;
        border-radius: 5px;
        background: ${(props) => props.theme.color};
        color: ${(props) => props.theme.background};
        font-size: 20px;
        &::placeholder {
            color: ${(props) => props.theme.background};
            margin: 5px;
            font-size: 20px;
        }
        outline: none;
    `,

    ResponsiveResults: styled.div`
        width: 100%;
        height: auto;
        position: fixed;
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        top: 50px;
        z-index: 999;
        font-size: 20px;
        font-weight: 500;
        font-family: Times New Roman;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    `,
    
    CloseSearchContainer: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        margin-right: 5px;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.primary === 'true' ? props.theme.color :
        props.theme.background};
    `,

    CloseSearchButton: styled(Close)`
        color: ${(props) => props.primary === 'true' ? props.theme.background :
        props.theme.color};
        width: 40px;
    `,

    ResponsiveArticle: styled.article`
        padding: 50px 6% 0 6%;
        width: 88%;
    `,

    ResponsiveFooterSection: styled.footer`
        width: 100%;
        height: 50px;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 2px;
        bottom: 0;
    `,

    FooterPars: styled.p`
        margin: 0;
    `,
    
    IntextH1: styled.h1`
        font-size: 20px;
        font-weight: 500;
        color: ${(props) => props.theme.color};
    `,

    ResponsiveSlider: styled.div`
        width: ${(props) => props.width};
        display: flex;
        height: ${(props) => props.height};
        overflow-x: auto;
        border: 2px solid ${(props) => props.theme.color};
        border-radius: 10px;
        &::-webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        &::-webkit-scrollbar {
            display: none;
        }
        margin: auto;
        margin-bottom: ${(props) => props.marginBottom};
    `,

    ResponsiveSliderImg: styled.img`
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin-bottom: -100px;
    `,

    ResponsiveSliderFigure: styled.figure`
        position: relative;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin: 0;
        margin-bottom: -100px;
        scroll-snap-align: start;
        scroll-behaviour: smooth;
        scroll-snap-stop: always;
    `,

    ResponsiveSliderFigCapture: styled.figcaption`
        position: absolute;
        bottom: 1.5%;
        left: 2%;
        color: floralwhite;
    `,

    ResponsiveYouTubeVideoContainer: styled.div`
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 75%;
    `,

    ResponsiveYouTubeVideo:  styled.iframe`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${(props) => props.theme.color};
    `,

    ResponsivePicturesContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,

    ResponsiveHomePicture: styled.img`
        width: 100%;
        height: auto;
        transition: 0.4s ease-out;
        border: 2px solid ${(props) => props.theme.border};
        border-radius: 5px;
    `,

    ResponsiveHomeFigure: styled.figure`
        width: 115%;
        height: auto;
        margin-left: 1px;
        margin-top: 7px;
        margin-bottom: 0;
    `,

    ResponsiveTable:  styled.table`
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 25px;
    `,
    
    ResponsiveTableImgContainer:  styled.tr`
        border: 3px solid ${(props) => props.theme.color};
        width: 100%;
        padding: 0;
        text-align: center;
    `,
    
    ResponsiveTableFigure:  styled.figure`
        margin: 0;
        height: 100%;
        width: 100%;
        padding-bottom: 3px;
    `,
    
    ResponsiveTableImg: styled.img`
        height: 80%;
        width: 100%;
    `,
    
    ResponsiveTableCell: styled.td`
        border: 3px solid ${(props) => props.theme.color};
        text-align: center;
        padding: 5px 0 5px 0;
    `,
    
}