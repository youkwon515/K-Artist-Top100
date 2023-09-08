import styled from "styled-components";

export const ChartContainer = styled.div`
    width : 100%;
    height : 100vh;
    padding : 120px 30px 0 30px;
    overflow: auto;
    background : #1E1E1E;

    &::-webkit-scrollbar {
        width : 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background : #C0C0C0;
        background-clip : padding-box;
    }
    
    &::-webkit-scrollbar-track {
        background : #222222;
    }
`;