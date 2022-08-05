import styled from "styled-components"

const Body = styled.div`
    background-color: #f2f2f2;
    margin: 4rem 0;
    min-height: calc(100vh - 8rem);
    padding: 0 5%;
`

const LinkWrapper = styled.div `
    a {
        color: #52b6ff;
        font-size: ${props => props.fontSize};
        text-decoration: none;
    }
`

export { Body, LinkWrapper };