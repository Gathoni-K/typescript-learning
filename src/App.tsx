import './App.css';
import {  useEffect, useState } from 'react';
import Input from './Component/Input';
import MainWrapper from './Component/MainWrapper';  
import type { Anime } from './types/anime';
import { fetchAnime } from './api/jikanApi';

function App() {
  // const [loading, setLoading] = useState(boolean);
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  //the initial value is an empty array.
  const handleAddAnime= async (name: string) => {
    //function to handle what happens.
    // setLoading(true);
    const newAnime = await fetchAnime(name);
    setAnimeList(prev => [...prev, newAnime]);
    // setLoading(false);
  }
  useEffect(() => {
  try {
    const saved = localStorage.getItem("animeList");
    if (saved) {
      // Add validation before parsing
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setAnimeList(parsed);
      } else {
        console.warn('Invalid animeList data in localStorage');
        localStorage.removeItem("animeList"); // Clear corrupted data
      }
    }
  } catch (err) {
    console.error('Failed to parse localStorage data:', err);
    localStorage.removeItem("animeList"); // Clear corrupted data
  }
}, []);
  // the block of code above will handle data persistence, storing our anime in localStorage.
  useEffect(()=> {
    localStorage.setItem("animeList", JSON.stringify(animeList));
  }, [animeList])
  //this function runs every time animeList changes
  const handleDeleteAnime = (id: number) => {
    setAnimeList(prev => prev.filter(anime => anime.mal_id !== id));
  }
  /* 
  our function excludes the anime with a matching mal_id.
  then proceeds to update the state with the new array.

  */

  const markCompletedAnime = (id: number) => {
    setAnimeList(prev => prev.map(anime => 
      anime.mal_id === id
      ? {...anime, watchStatus: anime.watchStatus === "watching" ? "completed" : "watching"}
      : anime
    ));
  };

  
  return (
    <>
      <Input onAddAnime={handleAddAnime}/>
      <MainWrapper animeList={animeList} onDeleteAnime={handleDeleteAnime} onToggleComplete={markCompletedAnime}/>
    </>
  )
}

export default App
