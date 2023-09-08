import styled from "styled-components";

export const ChartContainer = styled.div`
    width : 100%;
    height : calc(100vh - 70px);
    padding-top : 35px;
    overflow: auto;
    overflow-x: hidden;
    background : #1E1E1E;
    position: relative;

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