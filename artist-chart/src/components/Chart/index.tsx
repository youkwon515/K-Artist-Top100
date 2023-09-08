import { useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import ChartItem from "../ChartItem";
import * as S from './styled';

import Artist from "../../types/ArtistList";
import { getArtistList } from "../../api";

function Chart() {

    const [artist, setArtist] = useState<Artist[] | null>([]);
    
    useEffect(() => {
        async function fetchArtistList() {
            try {
                const artistList: Artist[] | null = await getArtistList();
                setArtist(artistList);
            } catch (error) {
                console.error(error);
            }
        }
        fetchArtistList();
    }, []);

    return (
        <S.ChartContainer>
            <Tooltip />
            {artist ? artist.map((data) => <ChartItem rank={data.rank} artist={data.artist} rankChange={data.rank_change} duration={data.duration} views={data.views}/>) : ''}
        </S.ChartContainer>
    );
}

export default Chart;