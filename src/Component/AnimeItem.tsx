/*
Compnent holding our individual anime items, our individual 'tasks'

*/

import { MdDeleteOutline, MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";
import styles from './AnimeItem.module.css';
import type { Anime } from '../types/anime';

interface AnimeItemProps {
    anime: Anime;
    onDelete: (id: number) => void;
    onToggleComplete: (id: number) => void;
}

const AnimeItem = ({ anime, onDelete, onToggleComplete }: AnimeItemProps) => {
    return (
    <div className={styles.animeItem}>
        <div className="animeImg">
            <img src={anime.image.jpg.image_url} alt={anime.title} className={styles.animeImg} />
        </div>

        <div className={styles.animeInfo}>
            
            <div className={styles.info}>
                <h4>Title: {anime.title} </h4>
                <p>No of episodes: {anime.episodes} </p>
                <p>Status: {anime.status} </p>
            </div>
            <div className={styles.button}>

            <button onClick={() => onToggleComplete(anime.mal_id)}>
                {anime.watchStatus === "completed" ? 
                <MdOutlineRadioButtonChecked />
                :<MdOutlineRadioButtonUnchecked />
                }
            
            </button>
            <button onClick={ ()=> onDelete(anime.mal_id)}>
                <MdDeleteOutline />
            </button>

            </div>

        </div>

    </div>
    )
}

export default AnimeItem
