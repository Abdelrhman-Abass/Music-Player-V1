import React from 'react';
import {Link}  from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause ,setActiveSong} from '../redux/features/playerSlice';
import PlayPause from './PlayPause'

const SongCard = ({ song ,i,isPlaying , activeSong,data}) => {
  const {
    item: {
      id,
      artist_names,
      title,
      song_art_image_url,
      release_date_for_display,
      url,
      featured_artists,
    },
  } = song;

  const dispatch = useDispatch()
  const handlePauseClick=()=>{
    dispatch(PlayPause(false));
  }
  const handlePlayClick = ()=>{
    dispatch(setActiveSong({song,data,i}))
    dispatch(PlayPause(true));
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause song={song} 
            handlePause={handlePauseClick} handlePlay={handlePlayClick}
            isPlaying={isPlaying} activeSong={activeSong}/>
        </div>

        <img alt='song_img' src={song_art_image_url}/>

      </div>


      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/song/details/?id=${id}`}>
            {title}
          </Link>
        </p>

        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link>
            {artist_names}
          </Link>
        </p>
        
      </div>

    </div>
  );
};

export default SongCard;

{/* <img src={song_art_image_url} alt={`Song art for ${title}`} />
      <h3>{title}</h3>
      <p>{`By ${artist_names}`}</p>
      <p>{`Released on ${release_date_for_display}`}</p>
      {featured_artists && (
        <p>
          Featured Artists:{' '}
          {featured_artists.map((artist) => (
            <span key={artist.id}>{artist.name}</span>
          ))}
        </p>
      )}
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Lyrics
      </a> */}