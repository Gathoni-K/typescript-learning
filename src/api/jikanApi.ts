import type { Anime } from '../types/anime';


export const fetchAnime = async (name: string): Promise<Anime> => {
    try {
        console.log('Searching for anime:', name);
        
        const apiUrl = `https://api.jikan.moe/v4/anime?q=${name}`;
        console.log('API URL:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP ERROR! STATUS: ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw API data:', data);
        
        const firstResult = data.data[0];
        console.log('First result:', firstResult);

        // Check if we have a result
        if (!firstResult) {
            throw new Error(`No anime found with name: ${name}`);
        }

        // Check if images exist
        if (!firstResult.images || !firstResult.images.jpg || !firstResult.images.jpg.image_url) {
            console.warn('Missing image data:', firstResult.images);
        }

        const cleanData: Anime = {
            title: firstResult.title,
            mal_id: firstResult.mal_id,
            episodes: firstResult.episodes,
            status: firstResult.status,
            image: {
                jpg: {
                    image_url: firstResult.images?.jpg?.image_url || '/fallback-image.jpg'
                }
            },
            watchStatus: "watching",
        };

        console.log('Clean data:', cleanData);
        return cleanData;

    } catch (error) {
        console.error('Error in fetchAnime:', error);
        throw error;
    }
}