import Artist from "../types/ArtistList";

export async function getArtistList(): Promise<Artist[] | null> {
    try {
        const res = await fetch('/api/artistList');
        const data: Artist[] = await res.json();
        return data;
        
    } catch(error) {
        console.error(error);
        return null;
    }
}