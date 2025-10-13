/*
Parent component containing the 'AnimeItem' component.
-This one is basically what will hold our individual AnimeItem components.

*/
import styles from './MainWrapper.module.css';
import AnimeItem from './AnimeItem';
import type { Anime } from '../types/anime';

interface MainWrapperProps {
    animeList : Anime[],
    onDeleteAnime : (id: number) => void;
    onToggleComplete: (id: number) => void;
}


const MainWrapper = ({ animeList, onDeleteAnime, onToggleComplete }: MainWrapperProps) => {
    return (
    <div className={styles.mainWrapper}>
        {animeList.map(anime => (
        <AnimeItem 
            key={anime.mal_id}
            anime={anime}
            onDelete={onDeleteAnime}
            onToggleComplete={onToggleComplete}
        />
    ))}
        
    </div>
    )
}

export default MainWrapper

/*
So this is what we have so far:
AnimeItem component - blueprint for how one anime looks like.
This component, container where the anime will go.
animeList state - actual anime data.


*/
