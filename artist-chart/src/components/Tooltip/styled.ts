import styled from "styled-components";

export const TooltipTable = styled.table`
    display : flex;
    width : 1000px;
    height : 30px;
    margin : 0 auto;
    margin-bottom : 30px;
    color : #E5E4E2;
    filter: drop-shadow(0 0 10px #E5E4E2);
    border-bottom : 0.5px solid #E5E4E2;
`;


export const RankTr = styled.tr`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 15%;
    height : 100%;
    border-right : 0.3px solid #E5E4E2;
    font-family: 'Kanit', sans-serif;
`;

export const ArtistTr = styled.tr`
    display : flex;
    justify-content: flex-start;
    align-items: center;
    width : 55%;
    height : 100%;
    padding-left : 15px;
    border-right : 0.3px solid #E5E4E2;
    font-family: 'Kanit', sans-serif;
`;

export const RankChangeTr = styled.tr`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 10%;
    height : 100%;
    border-right : 0.3px solid #E5E4E2;
    font-family: 'Kanit', sans-serif;
`;

export const DurationTr = styled.tr`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 10%;
    height : 100%;
    border-right : 0.3px solid #E5E4E2;
    font-family: 'Kanit', sans-serif;
`;

export const ViewsTr = styled.tr`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 10%;
    height : 100%;
    font-family: 'Kanit', sans-serif;
`;