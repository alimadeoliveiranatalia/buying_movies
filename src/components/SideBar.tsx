import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function SideBar({}) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [ genres, setGenres] = useState<GenreResponseProps[]>([])
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  const listgenres = genres.map(genre => (
    <Button 
      key={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => handleClickButton(genre.id)}
      selected={selectedGenreId === genre.id}
    />
  ))
  

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <nav className="sidebar">
      <span>Whatch<p>Me</p></span>
      <div className='buttons-container'>
        {listgenres}
      </div>
    </nav>
  )
}