import { useEffect, useState } from 'react';
import '../../styles/Home.css'

import JsonData from '../../assets/data.json';
import MusicCard from '../../components/music-card/MusicCard';


interface Music {
  id: number;
  name: string;
  music_genre: string;
  authors: string;
  year: string;
}

function Home() {
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [playList, setPlayList] = useState<Music[]>([]);
  

  const handleAddToPlaylist = (id: number) => {
    const musicPlaylist = musicList.find((item) =>
    item.id === id) as Music;
    if (!playList.find((item) =>
    item.id === musicPlaylist.id)) {
      setPlayList((prevPLaylist) => [...prevPLaylist, musicPlaylist])
    }
  };
  const handleRemoveFromPlaylist = (id: number) => {
    setPlayList((prevPlaylist) => prevPlaylist.filter((item) => item.id !== id));
  };


  useEffect(() =>{
    setMusicList(JsonData);
  }, []);

  return (
    <div className="Home">
      <h1>
        List of Songs:
      </h1>
      {musicList
        .map((item) => (
        <MusicCard
          key={item.id}
          id={item.id}
          name={item.name}
          genre={item.music_genre}
          authors={item.authors}
          year={item.year}
          buttonName='Add To Playlist'
          onClick={() => handleAddToPlaylist(item.id)}
        />
      ))}
      <h1>
        PlayList:
      </h1>
      {playList
        .map((item) => (
        <MusicCard
          key={item.id}
          id={item.id}
          name={item.name}
          genre={item.music_genre}
          authors={item.authors}
          year={item.year}
          buttonName='Remove From Playlist'
          onClick={() => handleRemoveFromPlaylist(item.id)}
        />
      ))}
    </div>
  );
}

export default Home;
