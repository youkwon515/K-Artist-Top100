import { useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import ChartItem from "../ChartItem";
import Loading from "../Loading";
import * as S from './styled';
import Artist from "../../types/ArtistList";
import { getArtistList } from "../../api";

function Chart() {
    const [loading, setLoading] = useState(false);
    const [artist, setArtist] = useState<Artist[] | null>([]);
    const [renderArtist, setRenderArtist] = useState<Artist[]>([]);
    const [currentArtistNumber, setCurrentArtistNumber] = useState<number>(0);
    
    useEffect(() => {
        async function fetchArtistList() {
            try {
                setLoading(true);
                const artistList: Artist[] | null = await getArtistList();
                setArtist(artistList);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchArtistList();
    }, []);

    useEffect(() => {
        const newArtist: Artist | null = artist ? artist[currentArtistNumber] : null;
        if (newArtist) {
            const timeoutId = setTimeout(() => {
                setRenderArtist((prevState) => [...prevState, newArtist]);
                setCurrentArtistNumber((prevState) => prevState + 1);
            }, 200);
            return () => clearTimeout(timeoutId);
        }
    }, [currentArtistNumber, artist]);

    return (
        <S.ChartContainer>
            <Tooltip />
            {!loading ? renderArtist.map((data) => <ChartItem rank={data.rank} artist={data.artist} rank_change={data.rank_change} duration={data.duration} views={data.views}/>) : <Loading />}
        </S.ChartContainer>
    );
}

export default Chart;