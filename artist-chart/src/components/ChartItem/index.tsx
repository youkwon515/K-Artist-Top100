import * as S from './styled';

import Artist from '../../types/ArtistList';

function ChartItem({rank, artist, rank_change, duration, views}: Artist) {
    return (
        <S.ItemContainer>
            <S.Rank>{rank}</S.Rank>
            <S.Artist>{artist}</S.Artist>
            <S.RankChange>{rank_change}</S.RankChange>
            <S.Duration>{duration}</S.Duration>
            <S.Views>{views}</S.Views>
        </S.ItemContainer>
    );
}

export default ChartItem;