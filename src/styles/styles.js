import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const styles = {

    Body: styled.body`
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
        border: ${(props) => props.theme.border};
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
        background: ${(props) => props.theme.background};
    `,
    Logo: styled.div`
        display: flex,
        width: 100%;
    `,
    LogoPic: styled.img`
        width: 100px;
        height: 120px;
        margin: 15px 20px 0px 40px;
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
        background: transparent;
        cursor: pointer;
        font-size: 16px;
        color: ${(props) => props.theme.color};
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
        background: transparent;
        cursor: pointer;
        font-size: 16px;
        color: ${(props) => props.theme.color};
        width: 16.75%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        &:hover {
            background: ${(props) => props.theme.activeBg};
            color: ${(props) => props.theme.activeColor};
        };
        &:enabled {
            border: none;
        }
    `,
}