import '../../styles/MusicCard.css';

interface MusicCardProps {
  id: number;
  name: string;
  genre: string;
  authors: string;
  year: string;
  buttonName: string;
  onClick: (id: number) => void;
}

function MusicCard({
  id,
  name,
  genre,
  authors,
  year,
  buttonName,
  onClick
}: MusicCardProps) {
  return (
    <div className='MusicCard'>
        Name:&nbsp;&nbsp;&nbsp;
        <span>{name}</span>&nbsp;&nbsp;&nbsp;
        Genre:&nbsp;&nbsp;&nbsp;
        <span>{genre}</span>&nbsp;&nbsp;&nbsp;
        Authors:&nbsp;&nbsp;&nbsp;
        <span>{authors}</span>&nbsp;&nbsp;&nbsp;
        Year:&nbsp;&nbsp;&nbsp;
        <span>{year}</span>&nbsp;&nbsp;&nbsp;
      <button className='playlist-button' onClick={() => onClick(id)}>
        {buttonName}
      </button>
    </div>
  )
}

export default MusicCard;