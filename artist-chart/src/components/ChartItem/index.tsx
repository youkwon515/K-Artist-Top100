import * as S from './styled';

import Item from '../../types/ChartItem';

function ChartItem({rank, artist, rankChange, duration, views}: Item) {
    return (
        <S.ItemContainer>
            <S.Rank>{rank}</S.Rank>
            <S.Artist>{artist}</S.Artist>
            <S.RankChange>{rankChange}</S.RankChange>
            <S.Duration>{duration}</S.Duration>
            <S.Views>{views}</S.Views>
        </S.ItemContainer>
    );
}

export default ChartItem;