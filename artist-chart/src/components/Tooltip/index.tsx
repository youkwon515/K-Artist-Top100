import * as S from './styled';

function Tooltip() {
    return (
        <S.TooltipTable>
            <S.RankTr>순위</S.RankTr>
            <S.ArtistTr>아티스트</S.ArtistTr>
            <S.RankChangeTr>순위변동</S.RankChangeTr>
            <S.DurationTr>지속기간</S.DurationTr>
            <S.ViewsTr>총 조회수</S.ViewsTr>
        </S.TooltipTable>
    );
}

export default Tooltip;