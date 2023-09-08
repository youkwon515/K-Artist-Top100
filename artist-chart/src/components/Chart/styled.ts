import styled from "styled-components";

export const ChartContainer = styled.div`
    width : 100%;
    height : calc(100vh - 70px);
    padding-top : 30px;
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