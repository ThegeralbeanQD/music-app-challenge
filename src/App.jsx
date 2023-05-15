import { useState } from 'react'
import './App.css'

import artists from './assets/artists.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// console.log(artists.length);

export default function App() {
  return (
    <section>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </section>
  )
}


const LikeToggle = () => {
  const [like, setLike] = useState(false);

  const handleLikeToggle = () => {
    setLike(prevState => !prevState);
  };

  const buttonStyle = {
    color: like ? '#d93a3a' : 'black',
  };

  return (
    <button onClick={handleLikeToggle} className='likeButton'>
      <FontAwesomeIcon icon={faHeart} size='2xl' className='buttonIcon' style={buttonStyle} />
      <span className='buttonText'>{like ? 'Unlike' : 'Like'}</span>
    </button>

  );
};

function ArtistCard({ artist }) {
  return (
    <div className='artistCard'>
      <h2 className='artistName'>{artist.name}</h2>
      <img src={artist.imgURL} className='artistPhoto' />
      <p className="artist-description">{artist.description}</p>
      <h3>Top Albums</h3>
      <div className="album-covers">
        {artist.topSoldAlbums.map((album) => (
          <div key={album.albumName} className='album-holder'>
            <img src={album.albumCover} alt={album.albumName} className="album-cover" />
            <h4>{album.albumName}</h4>
            <p>{album.releaseDate}</p>
          </div>
        ))}
      </div>
      <LikeToggle />
    </div>
  );
}


