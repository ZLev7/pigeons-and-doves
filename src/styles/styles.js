import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const styles = {

    Body: styled.div`
        background-image: ${(props) => props.theme.backgroundImage};
        background-attachment: fixed;
    `,

    Content: styled.div`
        max-width: 940px;
        min-width: 940px;
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
        border: 2px solid ${(props) => props.theme.color};
        border-collapse: collapse;
        width: 100%;
    `,

    TableCell: styled.td`
        border: 2px solid ${(props) => props.theme.color};
        height: 240px;
        text-align: center;
    `,

    TableImgContainer: styled.td`
        border: 2px solid ${(props) => props.theme.color};
        width: 300px;
        padding: 0;
        padding-bottom: 3px;
        text-align: center;
    `,

    TableHead: styled.td`
        border: 2px solid ${(props) => props.theme.color};
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
}