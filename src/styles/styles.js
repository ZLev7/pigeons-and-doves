import styled from 'styled-components';

export const styles = {

    Body: styled.body`
        background-image: ${(props) => props.theme.backgroundImage};
        background-attachment: fixed;
    `,

    Content: styled.div`
        max-width: 940px;
        padding-right: 10px;
        padding-left: 10px;
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
    `,
}