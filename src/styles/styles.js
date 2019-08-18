import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const styles = {

    Body: styled.div`
        background-image: ${(props) => props.theme.backgroundImage};
        background-attachment: fixed;
    `,

    Content: styled.div`
        max-width: 940px;
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
        &:hover {
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
        &:hover {
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
        border-radius: 3px;
        &:hover{
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
        props.theme.background : props.theme.color};
        color: ${(props) => props.primary === 'true' ? 
        props.theme.color : props.theme.background};
        border-radius: 3px;
        &:hover{
            background: ${(props) => props.theme.background};
            color: ${(props) => props.theme.color};
        }
    `,

    FooterTitle: styled.h1`
        margin-left: 4px;
        margin-bottom: 14px;
    `,

    FooterIntextLink: styled.a`
        color: ${(props) => props.theme.background};
        text-decoration: none;
    `,
}